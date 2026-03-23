const CACHE_NAME = 'lora-v1';
const ASSETS = [
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting(); // מכריח את ה-Worker להיכנס לפעולה מיד
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim()); // משתלט על הדף מיד
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
