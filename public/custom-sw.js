const CACHE_NAME = "my-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/src/main.tsx",
  "/courses",

  "/assets/dd.jpg",
  "/assets/dd-C5hmYWql.jpg",
  "/assets/gg.jpg",
  "/assets/gg-BNwHf7uE.jpg",
  "/assets/image.9a65bd94.svg",
  "/assets/image.9a65bd94-Cj-eOYyv.svg",
  "/assets/image.b0c2306b.svg",
  "/assets/image.b0c2306b-iTqcCueo.svg",
  "/assets/images.jpg",
  "/assets/images-zyqJ1PJB.jpg",
  "/assets/index-BX3h7BfC.js",
  "/assets/index-CHMDmIx_.css",
  "/icons/icon-192x192.png",
  "/manifest.webmanifest",
  "/registerSW.js",
  "/vite.svg",
  // Add any other required assets here
];

// Install event - Cache essential assets
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

// Fetch event - Handle SPA routing and asset caching
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    // For SPA routes, serve index.html
    event.respondWith(
      caches.match("/index.html").then((response) => {
        return (
          response ||
          fetch(event.request).catch(
            () => caches.match("/index.html") // Fallback to index.html if offline
          )
        );
      })
    );
  } else {
    // Handle static assets
    event.respondWith(
      caches.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request)
            .then((networkResponse) => {
              return caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
              });
            })
            .catch(() => {
              console.error("Resource not available:", event.request.url);
            })
        );
      })
    );
  }
});

// Activate event - Cleanup old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  self.clients.claim();
});
