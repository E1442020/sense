// custom-sw.js (Service Worker)

const CACHE_NAME = "my-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/assets/dd.jpg",
  "/assets/gg.jpg",
  "/assets/image.9a65bd94.svg",
  "/assets/image.b0c2306b.svg",
  "/assets/images.jpg",
  "/manifest.webmanifest",
  "/fallback-image.jpg", // Add fallback image to cache during install
  // Add any other necessary assets here
];

// Install event - Cache essential assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching essential assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch event - Serve cached content when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Serve from cache if available
      }

      return fetch(event.request) // Otherwise, fetch from network
        .catch(() => {
          // In case of network failure, serve fallback image or other resources
          if (
            event.request.url.endsWith(".jpg") ||
            event.request.url.endsWith(".jpeg") ||
            event.request.url.endsWith(".svg")
          ) {
            return caches.match("/fallback-image.jpg"); // Fallback image
          }
        });
    })
  );
});

// Activate event - Cleanup old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]; // Cache to keep
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // Delete old caches
          }
        })
      );
    })
  );
});
