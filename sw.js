const CACHE_NAME = 'lora-v2'; // שינוי ל-v2 כדי להכריח את הדפדפן לעדכן
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/audio/end_alert.mp3' // הוספת הקובץ לרשימת השמירה המקומית
];

// התקנה - שמירת כל הקבצים בזיכרון המקומי
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching essential assets...');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting(); 
});

// הפעלה - ניקוי גרסאות Cache ישנות
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// ניהול בקשות - קודם בודק ב-Cache, אם אין אז הולך לרשת
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
