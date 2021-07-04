'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "05619a99616317a82d69a5feb73aa8e0",
"assets/assets/images/4-kisilik-menu-etli-yaprak-sarma.jpg": "11c6cbe70dc2ac319d94eb9edd9851a8",
"assets/assets/images/4-kisilik-menu-isvec-kofte.jpg": "82091f0e8c7b6da63064b634f2387aa2",
"assets/assets/images/4-kisilik-menu-kori-soslu-tavuk.jpg": "a8f2a5b9dbc4012c8c6bce028c271a4d",
"assets/assets/images/aci-soslu-patlicanli-fettucine.jpg": "210a0b7800627354a666ac358ba3f914",
"assets/assets/images/akdeniz-soslu-mercimek-salata-mini.jpg": "0c7522a0eecb3bad827cadb2e2ea4fb6",
"assets/assets/images/alpro-soya-sutu-cikolatali.jpg": "aa96356331956ed58a9584c25741d5e9",
"assets/assets/images/alpro-soya-sutu-cilekli.jpg": "653dbfbba375250c33cdb1ab23fd0175",
"assets/assets/images/alpro-soya-sutu-sade.jpg": "ebd33793d403dda3ef6a3a47953f8d02",
"assets/assets/images/antep-usulu-karisik-dolma-ve-yogurt.jpg": "25e636444e524c97e005d100ef591284",
"assets/assets/images/baharatli-firin-patates.jpg": "2a063ef7bf43fc5bf3252e4ba28ab5f8",
"assets/assets/images/balzamik-soslu-bugday-salata-mini.jpg": "f9ba1e2cbf6ec6732b16369052dd6a3d",
"assets/assets/images/barbunya-pilaki.jpg": "d505375896a3e1a4630a2291fd807e8e",
"assets/assets/images/begendi-yataginda-kofte.jpg": "89e6fe4fe4c74368293ceb6fd8629207",
"assets/assets/images/beyaz-et-menu.jpg": "9d0189408435e5f645e8189c6edfda40",
"assets/assets/images/cappy-portakal-suyu-cam-sise-250ml.jpg": "e4ec37dd10fe605557d31e79c5e886da",
"assets/assets/images/cappy-portakal-suyu.jpg": "96f340d7d97cfd501456128aba34fc6b",
"assets/assets/images/cappy-seftali-suyu-cam-sise-250ml.jpg": "6b12419bac986158300bfded3cbccdd3",
"assets/assets/images/cappy-seftali.jpg": "924ec2530dcb22eadcd361d9d9a13a91",
"assets/assets/images/cappy-visne-suyu-cam-sise-250ml.jpg": "8bf3cd35dedaa6385ae68e037337a63c",
"assets/assets/images/cappy-visne-suyu.jpg": "8f504acd6f89ac17af3a5a1eba84ecd5",
"assets/assets/images/cekoslavak-gunesi.jpg": "b45fcdc65cf7f007e2688ba03bc455b5",
"assets/assets/images/cikolatali-brownie.jpg": "988b4076750e9aac8ccf8bd3e1cce47b",
"assets/assets/images/cikolatali-sufle.jpg": "84efcd48df9fb48e99f126d536c000a7",
"assets/assets/images/coca-cola-cam-sise.jpg": "025433bf5a16d32391a204fd1ed61069",
"assets/assets/images/coca-cola-kutu-330ml.jpg": "33032eece4f2fcbd0eae0b2bef04ec9f",
"assets/assets/images/coca-cola-light-cam-sise.jpg": "110aac512c417ae4b30a1373281252dd",
"assets/assets/images/coca-cola-light-kutu.jpg": "b29c09626a40b4acec6e31616d2173ea",
"assets/assets/images/coca-cola-zero-cam-sise.jpg": "4e0f95d555bd32a54e3716bc23a1db76",
"assets/assets/images/coca-cola-zero-kutu.jpg": "2a4dd2a694c96632a5b0fb78e7ef8a3a",
"assets/assets/images/damla-su.jpg": "794312966754fb1b82102dfb7a299946",
"assets/assets/images/dana-kavurma-ve-sehriyeli-pilav.jpg": "461fbf990c69f93ddf0e04fbe0b8d754",
"assets/assets/images/diyet-menu.jpg": "bd13cd640aa2e8b126c09480fe0d2a7c",
"assets/assets/images/domatesli-bulgur-pilavi.jpg": "8cc60650c1940bcb8da20b510a2e581a",
"assets/assets/images/enjoy-sikma-portakal-suyu.jpg": "1008f8f7cdc9be50089d01321d2725a6",
"assets/assets/images/enjoy-smoothie-cilekandmuz-250ml.jpg": "a8317a47e868c27383a77ea78278845c",
"assets/assets/images/enjoy-smoothie-mangoandpassion-fruit.jpg": "e9a50bdc35510cd43897879367fae1ff",
"assets/assets/images/etli-yaprak-sarma-ve-yogurt.jpg": "52e3c43ec9f8f5d8be83ee99367a0d63",
"assets/assets/images/fanta-portakal-kutu.jpg": "edd1f56b37a3f3fcab3e33ef8d44e860",
"assets/assets/images/firinlanmis-beyaz-nohut.jpg": "524e69bdb9af622a86bcb426f33cd77d",
"assets/assets/images/firinlanmis-tereyagli-mercimek-corbasi.jpg": "3e5bbc466a7969159ffb08f5b131e963",
"assets/assets/images/found-elmaliandtarcinli-demlendirilmis-su.jpg": "5e8e30fc770dc2961c5365eae254d905",
"assets/assets/images/found-limonlu-demlendirilmis-su-330ml.jpg": "3380aa218572f796925770413bdcf604",
"assets/assets/images/found-murver-cicekli-demlendirilmis-su-330ml.jpg": "886b6e7fa6e651647677968612c85ac7",
"assets/assets/images/found-naneliandsalatalikli-demlendirilmis-su.jpg": "be94726f418068a90e1cba688ef36d89",
"assets/assets/images/frambuazli-cheesecake.jpg": "71d614327bea1bb41211f59a5f79a2de",
"assets/assets/images/fuse-tea-limon-cam-sise-250ml.jpg": "0a471f254a4fa6b8959ac321883ccf54",
"assets/assets/images/fuse-tea-limon-kutu.jpg": "94090b4afd2adfbacdff83e7e2d1f7ad",
"assets/assets/images/fuse-tea-seftali-cam-sise-250ml.jpg": "01e1e60cbddebd8210a28c0309687a68",
"assets/assets/images/fuse-tea-seftali.jpg": "a461cf7c41c08039c97e7f6cb3f33128",
"assets/assets/images/guarana-antarctica-gazli-icecek.jpg": "ab33052e61068b3715227238e289002c",
"assets/assets/images/hunkar-begendi.jpg": "55d6db96f7d36569fd39627013b0b513",
"assets/assets/images/illy-caffe-macchiato-pet-250ml.jpg": "9cc0720af38891eed37a2f9c5dbd83a0",
"assets/assets/images/illy-latte-macchiato-pet-250ml.jpg": "6aaac06baf9850e82f73bbc9b267bb93",
"assets/assets/images/ince-kiyim-saksuka.jpg": "827ab3ecc2e0284bb23639c6c728781b",
"assets/assets/images/irmik-helvasi.jpg": "cee281a3447a3646f983bf5a5653811e",
"assets/assets/images/istemiyorum.jpg": "80f6e1438ab44412321c3e40d55e8910",
"assets/assets/images/isvec-kofte.jpg": "0443053dc7a5f04dbbdb2e0b50960540",
"assets/assets/images/izgara-kofte-ve-karisik-sebze.jpg": "3748795099f60b167b2a4eb00a2475b9",
"assets/assets/images/izgara-tavuk-ve-karisik-sebze.jpg": "81c935e287b93f6537ed1540330985a0",
"assets/assets/images/kabak-kalye.jpg": "9c138aee69ac295df53fb1f6b6f7a716",
"assets/assets/images/kadinbudu-kofte.jpg": "3c0ed3659526b4d9aab83477e1e388f0",
"assets/assets/images/kasarli-patates-puresi.jpg": "e665614c01e0d1a95c97256c7fefd957",
"assets/assets/images/kirmizi-et-menu.jpg": "1a9601cfa21324af58a6f29d1a00da49",
"assets/assets/images/kiymali-ispanak-oturtma-ve-yogurt.jpg": "730995ab7bb2653b43d589d8a6803cf1",
"assets/assets/images/kiymali-yesil-mercimek.jpg": "bb86ed56ebe8c7027f16bc9fddb445b2",
"assets/assets/images/kori-soslu-mantarli-tavuk.jpg": "41314fc509ae9627ff6e6a540a4a5fad",
"assets/assets/images/kus-sutu.jpg": "4987729a934b799afb8b028ab55fddc9",
"assets/assets/images/logo.jpg": "8f27f5c5ffa2b343c91cd79dc0538006",
"assets/assets/images/mini-icli-kofte.jpg": "b840c8ec30581224d39429bea2669b90",
"assets/assets/images/mini-karisik-sebze.jpg": "cabb37eb15e2566d5d32ec2671299815",
"assets/assets/images/naneli-yogurt-corbasi.jpg": "5052ebc0a0b2cc415c36c8e633c276d9",
"assets/assets/images/nohutlu-sehriyeli-pirinc-pilavi.jpg": "827328cf9218520e69e0dc300aa93968",
"assets/assets/images/orman-kebabi.jpg": "d37b4457c9a84dc8b446a3cc4568d96f",
"assets/assets/images/pancar-salata.jpg": "c286866de83615abd65c66f73ab418e6",
"assets/assets/images/patates-puresi-yataginda-kofte.jpg": "92d7376a14bfd8dea6d38e7f27037792",
"assets/assets/images/pilav-ustu-firin-tavuk.jpg": "6f75fef5d10951bf6251f6b8aeb2bee7",
"assets/assets/images/pilic-piccata-ve-fettucine.jpg": "131cc8e985e3936cc1d38e3a90269105",
"assets/assets/images/sebzeli--etli-menu.jpg": "7643364d9f8c2e8702efab490fd916c3",
"assets/assets/images/siyah-inci-dilim.jpg": "64a4a318d2a44abdf8a64e3121e8792f",
"assets/assets/images/somon-izgara.jpg": "47a1285615b3377192fb781294500a18",
"assets/assets/images/soslu-izgara-sebze.jpg": "185e6404c33ac4bda817327b31af7873",
"assets/assets/images/soya-soslu-tavuklu-sebzeli-noodle.jpg": "da616c5ea438d1e64a5405ad3b68e111",
"assets/assets/images/sprite-kutu.jpg": "9eb4c19cfcbbea3615bfc9118f233207",
"assets/assets/images/sutas-ayran-300ml.jpg": "79c871a270a078c667941a0a016df163",
"assets/assets/images/sutlu-brokoli-corbasi.jpg": "4c6cf32161d6c7e82f8efd7d266e83c0",
"assets/assets/images/tereyagli-cevizli-eriste.jpg": "713b895462d94b34d03bd8cade9899d2",
"assets/assets/images/thai-salata.jpg": "e85bfc12ce8ea4c4b27fcf225e71f21d",
"assets/assets/images/turlu.jpg": "3e7be2302f2f122577b27bdf13cfe959",
"assets/assets/images/veggie-lazanya.jpg": "db46dc725de85f9553d13955bf7a9f21",
"assets/assets/images/vejeteryan-menu.jpg": "c8ea62781ec00f9c929be5f255243733",
"assets/assets/images/venedik-soslu-kinoa-salatasi.jpg": "1381a457c312c8590db39c109414f69b",
"assets/assets/images/zerdecal-soslu-karisik-sebze.jpg": "1c8a296bad44d54ae7005c273f2f92d3",
"assets/assets/images/zeytinyagli-brokoli.jpg": "475546496ab57473d2ef0f6580ce190b",
"assets/assets/images/zeytinyagli-bruksel-lahanasi.jpg": "41678ebc20fdc1748c165eebabfc80db",
"assets/assets/menu.yaml": "7161a4442c9aca57172ab513b10719ed",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "704f402422d6e78aa07902a65a0f580d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b70dcefd9b49d6172d01ac11a67639d4",
"/": "b70dcefd9b49d6172d01ac11a67639d4",
"main.dart.js": "66a482bcc0738bca1412d6f8a60585bc",
"manifest.json": "aad55f6d70c4490f65d24ef6e7342e26",
"version.json": "70d86541ed0fe841ace4aecce68696a9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
