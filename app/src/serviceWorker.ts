import Logger from 'js-logger';

const CACHE_NAME = 'clg-mate-cache-v1';
const urlsToCache = [
  '/styles/style.css',
  '/images/',
  '/assets/'
];
let registration: ServiceWorkerRegistration;

window.self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache: Cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

window.self.addEventListener('fetch', (event: any) => {
  event.respondWith(
    caches.match(event.request)
      .then((response: Response | undefined) => {
        return response || fetch(event.request);
      })
  );
});

const register = (): void => {
  if (!('serviceWorker' in navigator && process.env.NODE_ENV === 'production')) {
    return;
  }
  const regEvt = navigator.serviceWorker.register('./ServiceWorker.js');
  regEvt.then((regObj: ServiceWorkerRegistration) => {
    registration = regObj;
    Logger.info('Service worker registered successfully.', 'Scope: ', regObj.scope);
  });
  regEvt.catch((err: Error | any) => Logger.error('Unable to register service worker.', err));
}

const unregister = (): void => {
  if (registration) {
    registration.unregister();
    Logger.info('Unregistered successfully.');
  }
}

export { register, unregister };
