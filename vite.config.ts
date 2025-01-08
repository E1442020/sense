import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      srcDir: "src",
      filename: "custom-sw.ts",
      strategies: "injectManifest",
      includeAssets: [
        "/assets/dd.jpg",
        "/assets/gg.jpg",
        "/assets/image.9a65bd94.svg",
        "/assets/image.b0c2306b.svg",
        "/assets/images.jpg",
      ], // List other static assets here

      registerType: "autoUpdate", // Automatically updates the service worker
      manifest: {
        name: "SENSE",
        short_name: "SENSE",
        description: "SENSE APP",
        theme_color: "#571698",
        display: "standalone",
        orientation: "any",
        start_url: "/",
        icons: [
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
