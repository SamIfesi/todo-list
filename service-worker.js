const CACHE_NAME = "todo-app-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/appIcon.png",
  "/assets/appIcon.png",
  "/assets/appIcon_512x512.png",
  "/assets/add.png",
  "/assets/check-mark-48.png",
  "/assets/close-40.png",
  "/assets/icons8-circle-50.png",
  "/assets/light-mode.png",
  "/assets/Night-mode.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(e.request);
    })
  );
});
