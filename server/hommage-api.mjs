import { createHash, timingSafeEqual } from "node:crypto";
import {
  SUBMISSION_LIMIT_PER_WINDOW,
  SUBMISSION_WINDOW_MINUTES,
  isValidAdminAction,
  validateHommageSubmission,
} from "./hommage-utils.mjs";

export const DB_HOST = process.env.HOMMAGE_DB_HOST || "10.243.11.128";
export const DB_PORT = Number(process.env.HOMMAGE_DB_PORT || 3306);
export const DB_NAME = process.env.HOMMAGE_DB_NAME || "smriti_gupta_om";
export const DB_USER = process.env.HOMMAGE_DB_USER || "smriti_gupta_om";
const DB_PASSWORD = process.env.HOMMAGE_DB_PASSWORD || "";
const DB_CONNECTION_LIMIT = Number(process.env.HOMMAGE_DB_CONNECTION_LIMIT || 5);
const ADMIN_PASSWORD = process.env.HOMMAGE_ADMIN_PASSWORD || "";
const IP_HASH_SALT = process.env.HOMMAGE_IP_HASH_SALT || "change-this-salt-before-production";

let db;
let initPromise;

async function getDb() {
  if (!db) {
    const { default: mysql } = await import("mysql2/promise");
    db = mysql.createPool({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      waitForConnections: true,
      connectionLimit: DB_CONNECTION_LIMIT,
      queueLimit: 0,
      namedPlaceholders: false,
      dateStrings: true,
    });
  }

  return db;
}

export async function initDb() {
  const pool = await getDb();
  initPromise ||= pool.execute(`
    CREATE TABLE IF NOT EXISTS hommages (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      name VARCHAR(120) NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      approved TINYINT(1) NOT NULL DEFAULT 0,
      rejected TINYINT(1) NOT NULL DEFAULT 0,
      ip_hash CHAR(64),
      PRIMARY KEY (id),
      INDEX idx_hommages_public (approved, rejected, created_at),
      INDEX idx_hommages_ip_created (ip_hash, created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  `);
  await initPromise;
}

async function getPublicHommages() {
  const pool = await getDb();
  const [rows] = await pool.execute(`
    SELECT id, name, message, created_at
    FROM hommages
    WHERE approved = 1
      AND rejected = 0
      AND created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
    ORDER BY created_at DESC, id DESC
  `);
  return rows;
}

async function countRecentSubmissions(ipHash) {
  const pool = await getDb();
  const [rows] = await pool.execute(
    `
      SELECT COUNT(*) AS count
      FROM hommages
      WHERE ip_hash = ?
        AND created_at >= DATE_SUB(NOW(), INTERVAL ? MINUTE)
    `,
    [ipHash, SUBMISSION_WINDOW_MINUTES],
  );
  return Number(rows[0]?.count || 0);
}

async function insertHommage({ name, message, ipHash }) {
  const pool = await getDb();
  const [result] = await pool.execute(
    `
      INSERT INTO hommages (name, message, approved, rejected, ip_hash)
      VALUES (?, ?, 1, 0, ?)
    `,
    [name, message, ipHash],
  );
  const [rows] = await pool.execute(
    `
      SELECT id, name, message, created_at
      FROM hommages
      WHERE id = ?
    `,
    [result.insertId],
  );
  return rows[0];
}

async function getAdminHommages(status) {
  const pool = await getDb();
  const [rows] = await pool.execute(
    `
      SELECT id, name, message, created_at, approved, rejected, ip_hash
      FROM hommages
      WHERE
        (? = 'pending' AND approved = 0 AND rejected = 0)
        OR (? = 'approved' AND approved = 1 AND rejected = 0)
        OR (? = 'rejected' AND rejected = 1)
        OR (? = 'all')
      ORDER BY created_at DESC, id DESC
      LIMIT 200
    `,
    [status, status, status, status],
  );
  return rows;
}

async function updateHommageStatus(id, action) {
  const pool = await getDb();

  if (action === "approve") {
    await pool.execute("UPDATE hommages SET approved = 1, rejected = 0 WHERE id = ?", [id]);
    return;
  }

  if (action === "reject") {
    await pool.execute("UPDATE hommages SET approved = 0, rejected = 1 WHERE id = ?", [id]);
    return;
  }

  await pool.execute("DELETE FROM hommages WHERE id = ?", [id]);
}

export function json(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
  });
  res.end(payload);
}

async function readJson(req) {
  let body = "";
  for await (const chunk of req) {
    body += chunk;
    if (body.length > 10_000) throw new Error("Request body is too large.");
  }
  return body ? JSON.parse(body) : {};
}

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  const raw = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return (raw?.split(",")[0] || req.socket.remoteAddress || "unknown").trim();
}

function hashIp(ip) {
  return createHash("sha256").update(`${IP_HASH_SALT}:${ip}`).digest("hex");
}

function isAuthorized(req) {
  if (!ADMIN_PASSWORD) return false;
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  const expected = Buffer.from(ADMIN_PASSWORD);
  const actual = Buffer.from(token);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export async function handleApi(req, res, url) {
  await initDb();

  if (req.method === "GET" && url.pathname === "/api/hommages") {
    return json(res, 200, { messages: await getPublicHommages() });
  }

  if (req.method === "POST" && url.pathname === "/api/hommages") {
    let payload;
    try {
      payload = await readJson(req);
    } catch {
      return json(res, 400, { error: "Invalid JSON payload." });
    }

    const validation = validateHommageSubmission(payload);
    if (!validation.ok) {
      return json(res, 400, { errors: validation.errors });
    }

    const ipHash = hashIp(getClientIp(req));
    const recent = await countRecentSubmissions(ipHash);
    if (recent >= SUBMISSION_LIMIT_PER_WINDOW) {
      return json(res, 429, { error: "Too many submissions. Please try again later." });
    }

    const savedMessage = await insertHommage({
      name: validation.data.name,
      message: validation.data.message,
      ipHash,
    });
    return json(res, 201, {
      message: "Thank you. Your message is now visible to all visitors.",
      homage: savedMessage,
    });
  }

  if (url.pathname.startsWith("/api/admin/")) {
    if (!isAuthorized(req)) {
      return json(res, 401, { error: "Unauthorized." });
    }

    if (req.method === "GET" && url.pathname === "/api/admin/hommages") {
      const status = url.searchParams.get("status") || "pending";
      if (!["pending", "approved", "rejected", "all"].includes(status)) {
        return json(res, 400, { error: "Invalid status filter." });
      }
      return json(res, 200, { messages: await getAdminHommages(status) });
    }

    const match = url.pathname.match(/^\/api\/admin\/hommages\/(\d+)\/(approve|reject|delete)$/);
    if (req.method === "POST" && match && isValidAdminAction(match[2])) {
      const id = Number(match[1]);
      await updateHommageStatus(id, match[2]);
      return json(res, 200, { ok: true });
    }
  }

  return json(res, 404, { error: "Not found." });
}
