// Service Worker — Concurso Docente 2026 PWA
// Estrategia: stale-while-revalidate para shell + tools clave
// Version: bump para forzar refresh del cache
const VERSION = 'cd26-v1.0.0';
const CACHE = 'cd26-shell-' + VERSION;

const SHELL = [
  '/concurso_docente/',
  '/concurso_docente/index.html',
  '/BANCO_PREGUNTAS/simulador_examen.html',
  '/concurso_docente/FLASHCARDS/flashcards_concurso_docente.html',
  '/concurso_docente/ESTADISTICAS_DATOS/cheat_sheet.html',
  '/PLAN_MAESTRO/ruta_completa.html',
  '/RUTINA_14_DIAS/plan_actual.html',
  '/ETAPAS_CONCURSO/guia_etapas.html',
  '/icon.svg',
  '/manifest.json'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache =>
      // add() individual con catch para que un 404 no rompa toda la instalación
      Promise.all(SHELL.map(url =>
        cache.add(url).catch(err => console.warn('[SW] Failed to cache', url, err.message))
      ))
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Solo mismo origen; deja que CDNs, Google Fonts, etc. usen su propio caching
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(req).then(cached => {
      const networkFetch = fetch(req).then(res => {
        // Solo cachear respuestas OK y no partiales
        if (res && res.ok && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(req, clone));
        }
        return res;
      }).catch(() => cached || caches.match('/concurso_docente/index.html'));

      // Stale-while-revalidate: entrega cache inmediato si existe, actualiza en background
      return cached || networkFetch;
    })
  );
});

// Permite forzar actualización desde la app
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
