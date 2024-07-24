'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "7b3b76e56caaf72366cefd4f8190cb29",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5fc98303179fada6fe3d5a10d83ba885",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ba3750f75c01693be95321408ab6379",
".git/logs/refs/heads/main": "e44b13c2a4b371b785478ede7182a9e9",
".git/logs/refs/remotes/origin/main": "f2eb84fe76a8df41726868a6cc2867c7",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/17/1ddbf504e83eaf06a01ad030e2d03aa56ae343": "ebede803de35ffb8dd77c48e202f2004",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/abf2683d8344b880b5bae7be31db2503ada710": "d8d91e66f9a762b08cf275b02b339fa0",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/4481dda712b6c598edcfea56640354e32fded7": "2e563abb2c14b99bfe813355eb5eb8ad",
".git/objects/28/f752e103c801b9c770b7ff2332c0dcbd3ef627": "ecd1561c407fb079910ef7604e1eb240",
".git/objects/32/072b86b60107ced05b708dd1344774b657f8ce": "ac81f884210f4eb616cc607643ff490f",
".git/objects/45/0d32f7c052d32df55acd70f3bf0c7201b17b2d": "78977ecbe1b74447f167490a934a2509",
".git/objects/46/4ef1bd00125e80e426bf6883ed4b7eb6b93b04": "aa52eec605d43967c2b84b2e74d24f6b",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/54/4ecb0c879a40f5e6d1aa17e3f66ec7241e1a38": "4c2cf79b2c5574f005dfc162a67f4e68",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/f56c6e142002e047fdc1df71ebbc2060bac81d": "2e0529f9189cee1df06bece4267691fd",
".git/objects/56/a5b65b9955f3ea9619b6bfe519118ea1b484e0": "e1805a8a189b77b0caeffb9056d417fe",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/144a5241b5509e557d71f14194120d9c8e7a57": "1857f18a5d5e130ec48e991a3a18d74d",
".git/objects/5c/393448597cf613a3497b1f1db2eb7a42b0fd43": "afeec51d4a1faa43cf08964319b0b124",
".git/objects/5c/42e95ffc14ca92e3095e85a4601011d1d50fd4": "e5d02df0f64ba7b0b1a58eae1efbdf20",
".git/objects/5e/4851f0ab7e0268da6ce903306e2f871ee19821": "175e3d630946dfb12bef53afeb623eb0",
".git/objects/68/a0306c0e711152967f3f769ec2925b6b7d7d84": "58bdc494a8d6faa3a467d3462346c61f",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6e/4dd8748c31c21967e465904631b3fe34d9d28b": "97dcc8d1b3c4a283dcfc7c57ec87ce32",
".git/objects/70/b821214a88dda2be8b430bb776360f25a285fd": "f67ed9a37bf0f985e6cfdb5fdcb1ee82",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/e297e83c222b20c07e7d62a3c386982e0603ce": "8ecba0ba5c3151390f6290ba1e3f620a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8a/ed257feb1b3462cdf13885321b55ad8c40a8df": "0d6f7b27653af45da836a2b877e994c4",
".git/objects/92/4cf89e32ed8899b494604be2a166f14bf08277": "1d0a292664f177ea63e308a4873f444f",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/93/d9352ebd674b376fb78c40261d8ebea4a44e8b": "cae10ceb49e9d7c612bb41584646e62b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9b/acd0deb8250f907daa5c5aaa5a4018be6feb9d": "487e2da28f28743e9b1b8df8c9710542",
".git/objects/a0/1f3777a6fc284b7a720c0f8248a27066389ef9": "1ef5c3c4a04465246d17da73a0924833",
".git/objects/a7/a9eecdac61b9c6d66de18d363ca047dd272b69": "a5149c029518bf6ea239fa782d9ba685",
".git/objects/a9/a40dc1a155f644b8c90bc32b15cb95d67971c3": "7e3122c8b634606dbd3b601cd818c7f7",
".git/objects/ab/aa09b9f7279d04227e526dfe0cb206fae2240b": "2f61ec9b16cf59b28f266858c269953a",
".git/objects/ae/637dd759a57d7834c5ffc974175f177b4dfcf7": "cdd2db02826b601d513bd8829f482fa7",
".git/objects/b3/be80d2f31736e31b034a84a7169897c92027a6": "d63e4c32fa18713cbf78f0a9db3e5911",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b8/cb67ac43cda0dbc45d68b19e623a8c9f080ff7": "930a3937d68cc686639c92bb2ea00462",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/933e3d5880368a3070e36ddd083af2fac01d2e": "eabab0375b3d443584cb1f2d70e1b26b",
".git/objects/bd/79d06d3ffe61eb1551b12b80791180d214c24d": "c5a14d1b88e30456e8c998c551c985a3",
".git/objects/c1/b86138d45a3badc7ae495d1aefb179aa86fcbb": "456bf08d0c43e59223841b2465df0cba",
".git/objects/c3/993394ea4fe0fcb89624bd85b71c155279b5da": "88c12b3d518462576d84b4b8b97a69b6",
".git/objects/c6/55eb88633adabcbd14a876dbb24eb14b70ac57": "0a7a0f3a6994edf1861f2a5de3e31417",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/d5d4fced7dc64ac05566352cebffb23759fc4a": "5b40d21684ee162e1e6313580e3f610e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/8ff68ca158828bbd240e6d9fb6970c8c0cadd9": "c68118f4f8136005634830f796ab2376",
".git/objects/de/4634c63e9cf06280a6ea8636f27a0abe7ee428": "b685038edb6a1202ee192f5d51487429",
".git/objects/df/3f268f43036a73cf53d6e49c9b750681acb361": "80ab1512f7156295d70ddda2e0daa34f",
".git/objects/ea/af4b2be21faaf05ba641b91077e807b99f52e9": "178b49d68248c98b25b207c7e3d2908f",
".git/objects/eb/dc9b5f21d479fcfc5d15cafa83b2c198b1e944": "6d268cfbcb76ff4d8192a9d72027cc05",
".git/objects/ec/c7041e23ed1a61574efe48e8bc42441a401d6e": "aac2d0844d4ef275550a63d0347a8a86",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fc/d75d945cae816c22bf7a86d4a5037c52280809": "6ccfdb5d03617a5ce75523e7456e9fea",
".git/objects/fe/0c315ee247d1837439511d8d9a1c73eb1898d1": "f81403687110c76fb96a07aa83e440c5",
".git/objects/fe/23eeb9c93a377d0f4ab003f1f77b555d19b1d1": "3d5a77b3829f7624a7acd6a67a20a19d",
".git/refs/heads/main": "a9db59e1418f77976ef166fcbd2a2084",
".git/refs/remotes/origin/main": "a9db59e1418f77976ef166fcbd2a2084",
"assets/AssetManifest.bin": "eb7dda81321048374888cdd0caa8df9f",
"assets/AssetManifest.bin.json": "444c8ab235eaaf7efdf67e075864ca53",
"assets/AssetManifest.json": "9e38d6b90f19927b393ccf4132485f01",
"assets/assets/fonts/Gothic-Bold.ttf": "4fa4ea43222779743fc8cd4b4835d04e",
"assets/assets/fonts/Gothic-Regular.ttf": "3cbe9257e888255cb2dad0d8a80a7759",
"assets/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/icons/icon_app.png": "c1309557417469e2d1fc0b0c7825a34b",
"assets/assets/images/banner.png": "32bd308f13895c71ee5c80ba18f3142e",
"assets/assets/images/logo_icon.png": "3f0d664ea4467d3a0351955d2de34e2a",
"assets/assets/images/logo_icon_white.png": "1f189049ac4cd45a8d6a6e6d8a7be735",
"assets/assets/images/logo_name.png": "f03358c7ee835c9ebaff60bd94249424",
"assets/assets/images/placeholder.png": "47320d879a02ba3a506c3527873c4fcb",
"assets/assets/images/upload.png": "6002bf50ecf028210f554fd5cf174660",
"assets/FontManifest.json": "66e8c0d2087c8f88c0691b6fed403dd2",
"assets/fonts/MaterialIcons-Regular.otf": "9a6cf761cfa30fc73830e2ca912563c4",
"assets/NOTICES": "8bbd9eef2c239104e4aba555e20a1beb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b376e6a80e3ff59be5a94a042f51fb5e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e23531c59c61e5a234a7318930e776bf",
"icons/Icon-192.png": "0f3c1102c330635e5a19ebad2464a7a1",
"icons/Icon-512.png": "d5796b68c8ca3d72526eda29681f6fb1",
"icons/Icon-maskable-192.png": "0f3c1102c330635e5a19ebad2464a7a1",
"icons/Icon-maskable-512.png": "d5796b68c8ca3d72526eda29681f6fb1",
"icons/logo_icon.png": "3f0d664ea4467d3a0351955d2de34e2a",
"index.css": "bb379c329c35cadf7d51b8556f5b94b2",
"index.html": "e86e7a32635aaec9f1fccc300d4537b9",
"/": "e86e7a32635aaec9f1fccc300d4537b9",
"main.dart.js": "21b28c64573a23437352719df2ba8e3c",
"manifest.json": "bc87e117edb7c7b95baab83670cf7912",
"version.json": "191595f72c94967ff44fc676a3aedb8c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
