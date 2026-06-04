/* N2 道場 FR — Service Worker */
const CACHE = "coursb2-v3";
const ASSETS = ["./","./index.html","./styles.css?v=2","./grammar-n2.js?v=1","./app.js?v=9","./manifest.json","./icon-192.png?v=2","./icon-180.png?v=2"];
self.addEventListener("install",(e)=>{e.waitUntil(caches.open(CACHE).then((c)=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",(e)=>{e.waitUntil(caches.keys().then((keys)=>Promise.all(keys.filter((k)=>k!==CACHE).map((k)=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",(e)=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then((cached)=>{if(cached)return cached;return fetch(e.request).then((res)=>{if(res&&res.status===200){const copy=res.clone();caches.open(CACHE).then((c)=>c.put(e.request,copy))}return res})}))});
