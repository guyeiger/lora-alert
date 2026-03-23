const CACHE_NAME = 'lora-alert-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// שומר את הקבצים בזיכרון של הטלפון בזמן ההתקנה
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// מאפשר לאפליקציה לעבוד גם כשאין אינטרנט
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
