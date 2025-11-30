self.addEventListener('install', (e) => {
    console.log('Установлено');
});

self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request));
});