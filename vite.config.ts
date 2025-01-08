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
        globPatterns: ["**/*.{js,css,html,svg,jpg,png}"], // Adjust patterns to cache relevant assets
      },
      manifest: {
        name: "My PWA",
        short_name: "PWA",
        description: "A sample PWA",
        theme_color: "#ffffff",
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
});
