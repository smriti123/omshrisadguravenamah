import { createHash, timingSafeEqual } from "node:crypto";
import {
  SUBMISSION_LIMIT_PER_WINDOW,
  SUBMISSION_WINDOW_MINUTES,
  isValidAdminAction,
  validateHommageSubmission,
} from "./hommage-utils.mjs";

const ADMIN_PASSWORD = process.env.HOMMAGE_ADMIN_PASSWORD || "";
const IP_HASH_SALT = process.env.HOMMAGE_IP_HASH_SALT || "change-this-salt-before-production";
const HOMMAGE_RETENTION_DAYS = 7;

let nextId = 1;
const hommages = [];

export async function initDb() {
  return undefined;
}

function toApiMessage(message) {
  return {
    id: message.id,
    name: message.name,
    message: message.message,
    created_at: message.created_at,
    approved: message.approved,
    rejected: message.rejected,
    ip_hash: message.ip_hash,
  };
}

function getRetentionCutoff() {
  return Date.now() - HOMMAGE_RETENTION_DAYS * 24 * 60 * 60 * 1000;
}

async function getPublicHommages() {
  const cutoff = getRetentionCutoff();
  return hommages
    .filter((message) => message.approved && !message.rejected && new Date(message.created_at).getTime() >= cutoff)
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime() || b.id - a.id)
    .map(toApiMessage);
}

async function countRecentSubmissions(ipHash) {
  const cutoff = Date.now() - SUBMISSION_WINDOW_MINUTES * 60 * 1000;
  return hommages.filter((message) => message.ip_hash === ipHash && new Date(message.created_at).getTime() >= cutoff).length;
}

async function insertHommage({ name, message, ipHash }) {
  const savedMessage = {
    id: nextId,
    name,
    message,
    created_at: new Date().toISOString(),
    approved: true,
    rejected: false,
    ip_hash: ipHash,
  };
  nextId += 1;
  hommages.push(savedMessage);
  return toApiMessage(savedMessage);
}

async function getAdminHommages(status) {
  return hommages
    .filter((message) => {
      if (status === "pending") return !message.approved && !message.rejected;
      if (status === "approved") return message.approved && !message.rejected;
      if (status === "rejected") return message.rejected;
      return true;
    })
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime() || b.id - a.id)
    .slice(0, 200)
    .map(toApiMessage);
}

async function updateHommageStatus(id, action) {
  const index = hommages.findIndex((message) => message.id === id);
  if (index === -1) return;

  if (action === "approve") {
    hommages[index].approved = true;
    hommages[index].rejected = false;
    return;
  }

  if (action === "reject") {
    hommages[index].approved = false;
    hommages[index].rejected = true;
    return;
  }

  hommages.splice(index, 1);
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
