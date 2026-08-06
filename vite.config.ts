import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const hommageDevApi = (): Plugin => ({
  name: "hommage-dev-api",
  apply: "serve",
  async configureServer(server) {
    const { handleApi, json } = await import("./server/hommage-api.mjs");

    server.middlewares.use(async (req, res, next) => {
      const host = req.headers.host || "localhost";
      const url = new URL(req.url || "/", `http://${host}`);

      if (!url.pathname.startsWith("/api/")) {
        return next();
      }

      try {
        return await handleApi(req, res, url);
      } catch (error) {
        server.config.logger.error(error instanceof Error ? error.stack || error.message : String(error));
        return json(res, 500, { error: "Internal server error." });
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), hommageDevApi(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
