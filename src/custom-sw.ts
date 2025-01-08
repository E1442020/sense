import { precacheAndRoute } from "workbox-precaching";

const CACHE_NAME = "custom-pwa-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/assets/dd.jpg",
  "/assets/gg.jpg",
  "/assets/image.9a65bd94.svg",
  "/assets/image.b0c2306b.svg",
  "/assets/images.jpg",
  "/manifest.webmanifest",
  // Add other assets here
];

// Install event: Cache essential assets
self.addEventListener("install", (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching essential assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch event: Serve cached assets when offline
self.addEventListener("fetch", (event: any) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Serve from cache if available
      }
      return fetch(event.request); // Otherwise fetch from the network
    })
  );
});

// Activate event: Cleanup old caches
self.addEventListener("activate", (event: any) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

precacheAndRoute(self.__WB_MANIFEST);
