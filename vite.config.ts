import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate", // Automatically updates the service worker
      injectRegister: "auto", // Automatically injects the service worker script
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,svg,webmanifest}"],
      },
      manifest: {
        name: "SENSE",
        short_name: "SENSE",
        description: "SENSE APP",
        theme_color: "#571698",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "/pdf.worker.min.mjs": "/pdf.worker.min.mjs", // Resolve the worker file path
    },
  },
  optimizeDeps: {
    include: ["pdfjs-dist"],
  },
  server: {
    // Make sure static files are being served correctly
    fs: {
      allow: ["."],
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Your backend server
        changeOrigin: true, // Ensures host headers match the backend
        rewrite: (path) => path.replace(/^\/api/, ""), // Rewrite the path if necessary
      },
    },
  },
});
