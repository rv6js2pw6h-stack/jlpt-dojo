/* N2 道場 — Service Worker (cache-first, vraiment hors-ligne) */
const CACHE = "n2dojo-v185";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=183",
  "./paywall.js?v=1",
  "./grammar-n2.js?v=182b",
  "./app.js?v=182b",
  "./manifest.json",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // laisse passer Google Fonts etc.

  // CACHE-FIRST pour la navigation : on sert TOUJOURS la page en cache si elle existe.
  // Ça rend l'app totalement indépendante du réseau et immunisée contre les pages
  // d'erreur d'hébergeur (ex. "no tunnel here") qui sinon écrasaient le cache.
  if (req.mode === "navigate") {
    e.respondWith(
      caches.match("./index.html").then((cached) => cached || fetch(req))
    );
    return;
  }

  // Cache-first pour le reste (CSS, JS, icônes, manifest).
  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      });
    })
  );
});
