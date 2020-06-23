import Logger from 'js-logger';

const CACHE_NAME = 'clg-mate-cache-v1';
const urlsToCache = [
  '/styles/style.css',
  '/images/',
  '/assets/'
];
self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache: Cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event: any) => {
  event.respondWith(
    caches.match(event.request).then((response: Response | undefined) => {
      return response || fetch(event.request);
    })
  );
});

const register = () => {
  if (!('serviceWorker' in navigator && process.env.NODE_ENV === 'production')) {
    return;
  }
  const regEvt = navigator.serviceWorker.register('./ServiceWorker.js');
  regEvt.then((regObj: ServiceWorkerRegistration) => Logger.log('Service worker registered successfully.', 'Scope: ', regObj.scope));
  regEvt.catch((err: Error | any) => Logger.error('Unable to register service worker.', err));
}

export default register;
