'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "300580b133c550accad8f2f1c69c2745",
"assets/AssetManifest.json": "f75b340e26b061901a713652f49a56f6",
"assets/assets/icons/earthquake.svg": "e7c11d722aa05591fb981cee05ffa7ae",
"assets/assets/icons/Filter.svg": "17df4982b7443cf08a2b337ddd345985",
"assets/assets/icons/Search.svg": "f8832fd5e49bbca45d76641635e17061",
"assets/assets/images/avatar.png": "eb40828420678a53f179a339a1022a28",
"assets/assets/images/bagis.png": "044639b94e9ed73b7f147653411cfa5a",
"assets/assets/images/batuhan.jpg": "44f3aae1f41612072a8682da28ac361b",
"assets/assets/images/bg_morning.png": "a942f6c20e85bda512a543041d3ac962",
"assets/assets/images/bg_night.jpg": "b4fc816af73c9d44067798f43a0c21b9",
"assets/assets/images/bilg_muh_bahar_uzaktan_2022_2023_sinav_program_final.pdf": "b3cced4bad5b545c5837e6fd97e4b37d",
"assets/assets/images/elon.jpg": "a07eeaab72f12490400d49246eed2750",
"assets/assets/images/faaliyet1.jpg": "684e991820090421f3847a3088f208d7",
"assets/assets/images/faaliyet2.jpg": "ca7ea2f8489a2c788b4bab97f7a53485",
"assets/assets/images/faaliyet3.jpg": "a5736e4622434f86e3850a2011dfae06",
"assets/assets/images/faaliyet4.jpg": "aa8af3e03e78875c1d646c37e2ecd80e",
"assets/assets/images/facebook.png": "20a79ab2fbc8cce3e89fea0a2a78f67a",
"assets/assets/images/github.png": "753bcd9afcfe2b688aa87c526262fbd0",
"assets/assets/images/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/images/gundem1.jpeg": "b2d7792646d6a135e30cdf5d43ed4a2a",
"assets/assets/images/gundem2.jpeg": "0bec59a8d36b5ee78935f21cd7ef241c",
"assets/assets/images/gundem3.jpg": "7128286bcfd24f15213532849c8028b6",
"assets/assets/images/gundem4.jpg": "694e7e4000ad6218893a4299a7c54efc",
"assets/assets/images/gundem5.jpeg": "09edb28a06bf024b239f9c93c299a42e",
"assets/assets/images/home_bg.png": "c09a1b88dda39b068f5b78afff920eb7",
"assets/assets/images/logo.png": "fb888690496858652da450c25121e0c8",
"assets/assets/images/logo1.png": "2624dfdc018ddb0b6fd8f2a734d63668",
"assets/assets/images/pp.jpg": "d2462541971dbe8885a89a9f9933bac4",
"assets/assets/images/profile.jpg": "4a4dd2353b2eaacf689246afbf39ab93",
"assets/assets/images/siren.png": "4b93bf6cbb41bec190312954901c811f",
"assets/assets/images/tayyip.jpg": "32084f0b2ca66d0c9a95c90587f8f701",
"assets/assets/images/turk_bayragi.png": "fd6e94bafaacb9c1e073aebd6a82eb48",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2de18372ec7d9f72e1c7fba414fe547d",
"assets/NOTICES": "ce5774f61093528261a51d6fdc3fe7b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "18cf33165c171444d3deb519633fe1f9",
"/": "18cf33165c171444d3deb519633fe1f9",
"main.dart.js": "a1ab857ad9b1237a8c1df8fba56c0eae",
"manifest.json": "10cffe812505246fe1601385696db0fb",
"version.json": "77502e958fc84ebf0694b0c8ba5733a0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
