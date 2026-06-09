import { createHash, timingSafeEqual } from "node:crypto";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";
import {
  SUBMISSION_LIMIT_PER_WINDOW,
  SUBMISSION_WINDOW_MINUTES,
  isValidAdminAction,
  validateHommageSubmission,
} from "./hommage-utils.mjs";

export const DB_PATH = resolve(process.env.HOMMAGE_DB_PATH || "data/hommage.sqlite");
const ADMIN_PASSWORD = process.env.HOMMAGE_ADMIN_PASSWORD || "";
const IP_HASH_SALT = process.env.HOMMAGE_IP_HASH_SALT || "change-this-salt-before-production";

mkdirSync(dirname(DB_PATH), { recursive: true });
const db = new DatabaseSync(DB_PATH);
db.exec(`
  CREATE TABLE IF NOT EXISTS hommages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    approved INTEGER NOT NULL DEFAULT 0,
    rejected INTEGER NOT NULL DEFAULT 0,
    ip_hash TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_hommages_public ON hommages (approved, rejected, created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_hommages_ip_created ON hommages (ip_hash, created_at DESC);
`);

const publicStmt = db.prepare(`
  SELECT id, name, message, created_at
  FROM hommages
  WHERE approved = 1
    AND rejected = 0
    AND datetime(created_at) >= datetime('now', '-7 days')
  ORDER BY datetime(created_at) DESC, id DESC
`);
const insertStmt = db.prepare(`
  INSERT INTO hommages (name, message, approved, rejected, ip_hash)
  VALUES (?, ?, 1, 0, ?)
  RETURNING id, name, message, created_at
`);
const countRecentStmt = db.prepare(`
  SELECT COUNT(*) AS count
  FROM hommages
  WHERE ip_hash = ?
    AND datetime(created_at) >= datetime('now', ?)
`);
const adminListStmt = db.prepare(`
  SELECT id, name, message, created_at, approved, rejected, ip_hash
  FROM hommages
  WHERE
    (? = 'pending' AND approved = 0 AND rejected = 0)
    OR (? = 'approved' AND approved = 1 AND rejected = 0)
    OR (? = 'rejected' AND rejected = 1)
    OR (? = 'all')
  ORDER BY datetime(created_at) DESC, id DESC
  LIMIT 200
`);
const approveStmt = db.prepare("UPDATE hommages SET approved = 1, rejected = 0 WHERE id = ?");
const rejectStmt = db.prepare("UPDATE hommages SET approved = 0, rejected = 1 WHERE id = ?");
const deleteStmt = db.prepare("DELETE FROM hommages WHERE id = ?");

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
  if (req.method === "GET" && url.pathname === "/api/hommages") {
    return json(res, 200, { messages: publicStmt.all() });
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
    const window = `-${SUBMISSION_WINDOW_MINUTES} minutes`;
    const recent = countRecentStmt.get(ipHash, window)?.count || 0;
    if (recent >= SUBMISSION_LIMIT_PER_WINDOW) {
      return json(res, 429, { error: "Too many submissions. Please try again later." });
    }

    const savedMessage = insertStmt.get(validation.data.name, validation.data.message, ipHash);
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
      return json(res, 200, { messages: adminListStmt.all(status, status, status, status) });
    }

    const match = url.pathname.match(/^\/api\/admin\/hommages\/(\d+)\/(approve|reject|delete)$/);
    if (req.method === "POST" && match && isValidAdminAction(match[2])) {
      const id = Number(match[1]);
      const statement = match[2] === "approve" ? approveStmt : match[2] === "reject" ? rejectStmt : deleteStmt;
      statement.run(id);
      return json(res, 200, { ok: true });
    }
  }

  return json(res, 404, { error: "Not found." });
}
