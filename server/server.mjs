import { createServer } from "node:http";
import { stat } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { DB_HOST, DB_NAME, DB_PORT, DB_USER, handleApi, initDb, json } from "./hommage-api.mjs";

const PORT = Number(process.env.PORT || 3000);
const PUBLIC_DIR = resolve(process.env.PUBLIC_DIR || "dist");

function securityHeaders(res) {
  res.setHeader("x-content-type-options", "nosniff");
  res.setHeader("referrer-policy", "same-origin");
  res.setHeader("x-frame-options", "DENY");
}

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};

async function serveStatic(req, res, url) {
  let filePath = resolve(join(PUBLIC_DIR, decodeURIComponent(url.pathname)));
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  try {
    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) filePath = join(filePath, "index.html");
  } catch {
    filePath = join(PUBLIC_DIR, "index.html");
  }

  if (!existsSync(filePath)) {
    res.writeHead(404);
    return res.end("Build output not found. Run npm run build first.");
  }

  securityHeaders(res);
  res.setHeader("content-type", mimeTypes[extname(filePath)] || "application/octet-stream");
  createReadStream(filePath).pipe(res);
}

const server = createServer(async (req, res) => {
  securityHeaders(res);
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  try {
    if (url.pathname.startsWith("/api/")) {
      return await handleApi(req, res, url);
    }
    return await serveStatic(req, res, url);
  } catch (error) {
    console.error(error);
    return json(res, 500, { error: "Internal server error." });
  }
});

try {
  await initDb();
  server.listen(PORT, () => {
    console.log(`Hommage website server listening on http://localhost:${PORT}`);
    console.log(`MySQL database: ${DB_USER}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);
  });
} catch (error) {
  console.error("Failed to initialize hommage MySQL database:", error);
  process.exit(1);
}
