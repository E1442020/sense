import { precacheAndRoute } from "workbox-precaching";

// const CACHE_NAME = "workbox-preCache-v2";

// self.addEventListener("install", (event: any) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll([
//         "/assets/dd.jpg",
//         "/assets/gg.jpg",
//         "/assets/image.9a65bd94.svg",
//         "/assets/image.b0c2306b.svg",
//         "/assets/images.jpg",
//       ]);
//     })
//   );
// });

precacheAndRoute(self.__WB_MANIFEST);
