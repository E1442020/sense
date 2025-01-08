// custom-sw.js (Service Worker)

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/assets/dd.jpg",
        "/assets/gg.jpg",
        "/assets/image.9a65bd94.svg",
        "/assets/image.b0c2306b.svg",
        "/assets/images.jpg",
        "/manifest.webmanifest",
        // Add more assets you want to cache
      ]);
    })
  );
});

// Serve cached content when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request); // If cached, return it, otherwise fetch from network
    })
  );
});

// Activate event to clear old caches (useful for cache updates)
self.addEventListener("activate", (event) => {
  const cacheWhitelist = ["my-cache"]; // List the caches you want to keep
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // Remove old caches
          }
        })
      );
    })
  );
});
