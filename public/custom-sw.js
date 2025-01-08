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
      // Serve from cache if available
      if (cachedResponse) {
        return cachedResponse;
      }

      // Fallback to network fetch
      return fetch(event.request)
        .then((networkResponse) => {
          if (
            event.request.method === "GET" &&
            event.request.destination !== "document"
          ) {
            // Optionally cache network responses for future use
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Handle offline errors with specific fallbacks
          if (event.request.destination === "image") {
            return caches.match("/assets/images.jpg"); // Valid fallback image
          }
          if (event.request.destination === "document") {
            return caches.match("/index.html"); // Fallback for HTML files
          }
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
            return caches.delete(cacheName); // Delete outdated caches
          }
        })
      )
    )
  );
  self.clients.claim();
});
