import { defineConfig, normalizePath, type Plugin } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";

// In dev, Fresh routes files referenced from CSS (e.g. url("./img/x.avif") in
// assets/styles.css) to the app, which 404s. Point them at Vite's /@fs/ file
// server instead. Production builds are unaffected: Vite emits hashed files.
function serveCssAssetsInDev(): Plugin {
  return {
    name: "serve-css-assets-in-dev",
    apply: "serve",
    configureServer(server) {
      const root = normalizePath(server.config.root);
      server.middlewares.use((incoming, _res, next) => {
        // Node request types aren't loaded in this Deno project.
        const req = incoming as { url?: string };
        if (req.url?.startsWith("/assets/img/")) {
          req.url = `/@fs/${root}${req.url}`.replace(/^\/@fs\/\//, "/@fs/");
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [serveCssAssetsInDev(), fresh(), tailwindcss()],
});
