const CACHE_NAME = "my-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/assets/dd.jpg",
  "/assets/gg.jpg",
  "/assets/image.9a65bd94.svg",
  "/assets/image.b0c2306b.svg",
  "/assets/images.jpg",
];

// Install event - Cache essential assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching essential assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting(); // Activate the service worker immediately
});

// Fetch event - Serve cached content when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Serve from cache
      }

      return fetch(event.request).catch(() => {
        // Network request failed, return nothing
        console.error("Network error, and no cache available");
      });
    })
  );
});

// Activate event - Cleanup old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // Delete old caches
          }
        })
      )
    )
  );
  self.clients.claim(); // Immediately take control of all clients
});
