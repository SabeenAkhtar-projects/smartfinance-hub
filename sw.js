// ═══════════════════════════════════════
// SMARTFINANCE HUB — sw.js (Service Worker)
// ═══════════════════════════════════════

const CACHE = 'sfhub-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/components.css',
  '/js/app.js',
  '/js/animations.js',
  '/js/pwa.js',
  '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});
