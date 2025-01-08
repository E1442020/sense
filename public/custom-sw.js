const CACHE_NAME = "my-cache-v1";
const ASSETS_TO_CACHE = [
  "/index.html",
  "/assets/dd.jpg",
  "/assets/gg.jpg",
  "/assets/image.9a65bd94.svg",
  "/assets/image.b0c2306b.svg",
  "/assets/images.jpg",
  "/vite.svg", // Add additional static assets if needed
];

// Install event - Cache essential assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Fetch event - Serve cached resources and provide fallbacks
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
      );
    })
  );
});

// Activate event - Clean up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // Remove old caches only.
          }
        })
      )
    )
  );
  self.clients.claim(); // Ensure the service worker takes control immediately.
});
