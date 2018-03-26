/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

// importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js");


var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  'cup.png',
  'heart.png',
  'map.js',
  'style.css',
  'index.html',
  'manifest.json',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
  'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/357/545.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/358/545.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/357/544.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/357/546.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/358/544.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/358/546.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/358/547.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/357/547.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/358/543.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/357/543.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/359/545.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/359/546.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/359/547.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/359/543.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/10/359/544.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/18/91576/139936.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/18/91575/139936.jpeg'
];

/**FH Kufstein
 * 'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/18/91576/139936.jpeg',
  'https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/18/91575/139936.jpeg' */

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});



self.addEventListener('activate', function(event){
    console.log(event);
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
      caches.match(event.request).then(function(res){
          if(res){
              return res;
          }
          return requestBackend(event);
      })
  )
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
// self.__precacheManifest = [
//   {
//     "url": "assets/icon/favicon.ico",
//     "revision": "d2f619d796fbe8bed6200da2691aa5b6"
//   },
//   {
//     "url": "assets/icon/icon.png",
//     "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
//   },
//   {
//     "url": "build/app.js",
//     "revision": "0e705fce802bb5907d898c56d3169a41"
//   },
//   {
//     "url": "build/app/app.5kdyondl.js",
//     "revision": "196cc151ce8a74ba3a4ee9fa8956121c"
//   },
//   {
//     "url": "build/app/app.foagkr7z.js",
//     "revision": "6fcf7dc81848f5352fde400da50a6d86"
//   },
//   {
//     "url": "build/app/b3krahln.es5.js",
//     "revision": "ff2b45a3b45f12c15308dbace4201488"
//   },
//   {
//     "url": "build/app/b3krahln.js",
//     "revision": "d3b38c305233b652221b6e1fdc696000"
//   },
//   {
//     "url": "build/app/chunk1.es5.js",
//     "revision": "dd69d79b9340afd28c626fc641fde7ea"
//   },
//   {
//     "url": "build/app/chunk1.js",
//     "revision": "1327a06cde52fb62e9120827ec07c553"
//   },
//   {
//     "url": "build/app/chunk2.es5.js",
//     "revision": "9f41b553327bbf6b068d96c2ab554cca"
//   },
//   {
//     "url": "build/app/chunk2.js",
//     "revision": "062a09e8f97dc59680f969fc9ab041d8"
//   },
//   {
//     "url": "build/app/dx4nk3lp.es5.js",
//     "revision": "8c5f0eb8967f152dcce3a277cb3f4270"
//   },
//   {
//     "url": "build/app/dx4nk3lp.js",
//     "revision": "4b2d8f35811c81329fa834dbf416d93c"
//   },
//   {
//     "url": "build/app/eudyes7t.es5.js",
//     "revision": "8dfea9d58c0dea4ad3311565586fbb21"
//   },
//   {
//     "url": "build/app/eudyes7t.js",
//     "revision": "7d9730ca67088111205223e0273c4536"
//   },
//   {
//     "url": "build/app/k37lgqdj.es5.js",
//     "revision": "87a95aba27c57d06b075dea46e67fe41"
//   },
//   {
//     "url": "build/app/k37lgqdj.js",
//     "revision": "24d58cd94a81f739c0adc83bdec30ac0"
//   },
//   {
//     "url": "build/app/vjjlzbqm.es5.js",
//     "revision": "73129847e4e8a7b46a91072970a36c18"
//   },
//   {
//     "url": "build/app/vjjlzbqm.js",
//     "revision": "16b7ef3c0aad7912a51b7742092a1f9b"
//   },
//   {
//     "url": "build/app/yigntril.es5.js",
//     "revision": "c3ceef0146bafe8033f0f42646d4cf01"
//   },
//   {
//     "url": "build/app/yigntril.js",
//     "revision": "ff6cc8625ee5609f1674d05b40190fd2"
//   },
//   {
//     "url": "index.html",
//     "revision": "4cdcdfa9e0f4cdfc4381879bfb8d5754"
//   },
//   {
//     "url": "manifest.json",
//     "revision": "e33a9f39d3f8b2c46d13156237b4e0ae"
//   }
// ].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
