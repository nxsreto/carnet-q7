const C='sax-20261014135619',F=['./','index.html','manifest.webmanifest','icon-180.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
const SC=new URL(self.registration.scope).pathname;
self.addEventListener('fetch',e=>{const r=e.request,U=new URL(r.url);if(r.method!=='GET'||U.origin!==location.origin||!U.pathname.startsWith(SC)||U.pathname.slice(SC.length).includes('/'))return;
  e.respondWith(caches.open(C).then(async c=>{const hit=await c.match(r,{ignoreSearch:true});
    const net=fetch(r).then(res=>{if(res&&res.ok)c.put(r,res.clone());return res}).catch(()=>hit);
    return hit||net}))});