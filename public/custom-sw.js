const CACHE_NAME = "my-cache-v1";
const ASSETS_TO_CACHE = [
  "/index.html",
  "/assets/dd.jpg",
  "/assets/gg.jpg",
  "/assets/image.9a65bd94.svg",
  "/assets/image.b0c2306b.svg",
  "/assets/images.jpg",
  "/vite.svg", // Add any other assets here
];

// Install event - Cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching essential assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Fetch event - Serve cached resources and provide fallbacks
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Serve from cache if available
      }

      // Try network fetch and handle failures
      return fetch(event.request)
        .then((networkResponse) => {
          return networkResponse; // Serve from network
        })
        .catch(() => {
          // Handle offline errors
          if (event.request.destination === "image") {
            // Fallback for images
            return caches.match("/assets/images.jpg"); // Replace with a valid fallback image path
          } else if (event.request.destination === "document") {
            // Fallback for HTML
            return caches.match("/index.html");
          }
          // Default fallback (optional)
          return new Response("Resource unavailable", {
            status: 404,
            statusText: "Not Found",
          });
        });
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
            return caches.delete(cacheName); // Remove old caches
          }
        })
      )
    )
  );
  self.clients.claim();
});
