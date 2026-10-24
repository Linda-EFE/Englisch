// Offline-Unterstützung: lädt bei Internetverbindung immer die neueste Version,
// ohne Verbindung die zuletzt gespeicherte.
const CACHE = "en-v4";
const FILES = ["./", "index.html", "vokabeln.json", "geschichten.json", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("en-") && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    try {
      const res = await fetch(e.request, {cache: "no-cache"});
      // nur echte App-Dateien speichern, keine Anmeldeseite (Cloudflare Access leitet um)
      const own = !res.redirected && new URL(res.url || e.request.url).origin === self.location.origin;
      if (res.ok && own) cache.put(e.request, res.clone());
      return res;
    } catch (err) {
      const cached = await cache.match(e.request, {ignoreSearch: true});
      if (cached) return cached;
      throw err;
    }
  }));
});
