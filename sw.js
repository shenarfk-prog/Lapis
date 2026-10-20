// 旧バージョン（ルート直下にゲームがあった頃）の Service Worker を片付けるためのもの
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    await caches.delete('kiriko-v1');
    await self.registration.unregister();
    const cs = await self.clients.matchAll({ type: 'window' });
    cs.forEach(c => c.navigate(c.url));
  })());
});
