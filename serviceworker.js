const CACHE_ELEMENTS = ["./"];

const CACHE_NAME = "v1_cache_contador_react";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache
        .addAll(CACHE_ELEMENTS)
        .then(() => self.skipWaiting())
        .catch((err) => console.log(err));
    })
  );
});

self.addEventListener("activate", (e) => {
  const cacheWhiteList = [CACHE_NAME];

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          return (
            cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName)
          );
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => (res ? res : fetch(e.request)))
  );
});
