'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "43d04a61d1dc508c8b3ac47c47d999f5",
".git/config": "750a9181eff0e16427274ed1db6794e4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "810ea328151f5253027bc1407b92bc62",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "109fb662f7140643b90fe3f8098af11e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "88f5dad5ba4d83988d76e180007a6639",
".git/logs/refs/heads/BasketDevelop": "8ff83c2207b8bc69625c6aff89206562",
".git/logs/refs/heads/Develop": "4d42feaaf2ee3c6c8b76e0cf22cdfe42",
".git/logs/refs/heads/WebDevelop": "1a350da3c73a33381f8d8dd6856ef318",
".git/logs/refs/remotes/origin/BasketDevelop": "1402626eda9cecd2bd4732b9baaa9227",
".git/objects/03/bcd7759c01ab5dc995ef74b6b8e0c03f2d5a84": "13813c2156f9a471ec6ac6dd6c502b0c",
".git/objects/05/133c749478fbb78feb506f851acec2490ea5b5": "b3231f0bbb2dcad724b82469f59e1d3d",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/08/3b19cc038c4824d7378e27dd56dbc8f043eea5": "edded3cec2b363fd9a17acaf0198e9e3",
".git/objects/0b/fe3836c657a8f3075419099d58b4a6e2a5d88c": "e501c63543c74cb157e2c11382ca09ff",
".git/objects/13/a08101da62097c5f5df668763477b3322a49a0": "bd3e61ae79691bfad078e566e710f42a",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/0af279542b411b881cf66544c928ca473e466f": "6ced6635c82216c1ee5add0c719de901",
".git/objects/2b/fd8da7ff1ac16dd816dbaf5fecfaad8c2764b6": "fe8b38f6df60c7ce031c947a48580dd8",
".git/objects/2e/f70bbb436f31c3f05a1990edbd15fef917e92e": "375cccd960b909d0e6178f6e78ab3837",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/3e7e1e740c4752bb100a3796f1c36a20238d7d": "b7ab0850eb87e6438f9af8c0f4529aa7",
".git/objects/35/143473e0d4ee0db14f0e146999118047b14d81": "b4fc103ef1c8742c18d035855c2b7876",
".git/objects/35/345cc012dfb78245e93083a832aef2e7d2dedc": "d2fccbae34004e7b237aef73b73d0dc8",
".git/objects/36/e5ed740c9f8c813f274db3128eda9b45b58474": "97e47f789e9a7ef619094e37e83808ce",
".git/objects/3b/368d2575ddf1d9f805fde79bd0a09296b37f80": "6dff565239f06e4afbac0cb8601388d5",
".git/objects/3c/5d22f742f0e4ba37a6f38e429252b71bd74d72": "a409fb3d278c312081347f4ec74bb6ca",
".git/objects/4a/39d153c52002661b192cae7c3e9d30e03e26a0": "cc532946a6a4fdf5eb27188e0d0ed2e1",
".git/objects/54/47378a653aff246c5df0e2db166d6d569a64bc": "c8b5fb16014fa674ea0f4704aa42c607",
".git/objects/58/7de327fd7719882b08e2c702bb13fa8bb62db4": "cefd74537ba8b664ba9f015c736c0fcc",
".git/objects/5a/f19b121afa6a022026440c288c0cfdc55f3da9": "7bed604cecdb5599632e058b8ea715ac",
".git/objects/5d/10c6b2e743f5b6b39f7417081a96403d7ccc56": "f28a4ff8cd8273cac3e01c2327dfb4ac",
".git/objects/5e/aa546dd17d6baeb5de6ff20f88cfac40b39174": "209fa33f7345efa0c98534f885efc7b7",
".git/objects/65/bbeff71fd82e87dea753c2773f45ed3a681a62": "0cd53d2d84f1725f5bad1d06bcb0733e",
".git/objects/6f/12a10a6066f1757d7ff41b5d4b14cee2041063": "8a206971ce283bfc100f96d670d275d5",
".git/objects/73/99fc5e4194898cb19acfae3cbf7d36c0740ed3": "53f9bf20151acb31b22b438f108654a2",
".git/objects/76/5edbb43f1b44c1805f9c2052b51fd819840f2f": "60ed5b2d01bb40376a6c24397465b844",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/82/bba92dde674caf81f5b221f1c743ef0f2e590c": "6a4b5667a03d8a203f41c8f8cede33ed",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/94/0faa12d07e5d6ec6c854f3425a0bd062597982": "728dda66014cd1a47cd0a96db4214dfb",
".git/objects/98/5dfb8cf8a94675c870062373e4bf81ec35921e": "3d292ae3f3940e5d9432485f6aaa97fd",
".git/objects/98/c5cf5c6f961eb74a4610b4a3a046275c74298f": "dc876e4267d5bbc67501618e9a23ff4f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/2cedb0529083dbf27092ae9b42f5314da94523": "8d5a231c656bf3d5f2d85387589e382b",
".git/objects/c0/087da17031f0dcd97c303e3764da48573f7e4c": "87cecd9ad989883320649b983e8c344c",
".git/objects/c5/1c9699ac56ef636bc162df0db8619bd424a2b3": "268fad1bac7f32c71eecbcf79e48a5fa",
".git/objects/c8/91f7fef21469d48c6d66442bfbbc77488d8e77": "556812e5ef52cfa66acf802de20efd49",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/814444958920f31145d5d2a4c982a598521b64": "0667b6c118e2b7ed5e4a755a6b9c1279",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/93d78b3e7d83e6625040d2a8c9ffbaa6f33a09": "5cbd100dd2ade959c627443fb9f53409",
".git/objects/f2/59819d73ce17b5d26f00fa3bc1f1fc01593416": "1b84338af657c6648ae5ee14f665eabd",
".git/objects/f3/680da1bb831832e737db5afd589b344394ffc8": "70be269ba91b2c6d8d3d692ff85298b3",
".git/objects/f3/68f8c4ee5ed821715f3b71e367b556971cdcfa": "1ef28eb9df5c445594d8c8a431744132",
".git/objects/f5/269dc9dc70f325604a8446a59779b6cdc22795": "e0afeb7cb1d2b2ab945cda6b5f3c38f0",
".git/objects/f7/53e8ea6991e265d6bba65520306f41e023b99c": "61747cd65446f0d7da784e3f8aaf48fb",
".git/objects/f8/9fb564ca267a3a4699aff843f46706ab4a5118": "3daf916bde6152e4b0c272bff7930e50",
".git/objects/f9/a4d84ce07620b86ea9dd49e755a5a838419bc6": "b5fe87031d2683bddf40375d1e09684f",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fe/5170bdfd74158e8a549b5bcfc121bbf226cf57": "63b22ecd8729469020c23bd290703556",
".git/objects/ff/32ab467c67d5c30b9eb932febdfab1d71660a2": "e8533e55e40e60711b48a1560f2ee088",
".git/refs/heads/BasketDevelop": "d65fecfab5fbca169b26bcead7bba373",
".git/refs/heads/Develop": "79e70489584ff08b9820457e409fc9de",
".git/refs/heads/WebDevelop": "79e70489584ff08b9820457e409fc9de",
".git/refs/remotes/origin/BasketDevelop": "d65fecfab5fbca169b26bcead7bba373",
"assets/AssetManifest.json": "9cf07e9bbbb4bf98e7b8d002d1878363",
"assets/assets/images/album.jpg": "cdad03c25a927baddf59ce84e7033570",
"assets/assets/images/authyimage.jpg": "60a324c68a5d34c46bd0739590cc9671",
"assets/assets/images/google.png": "3ecbe9ccf1744797097295c533223287",
"assets/assets/images/instagram.png": "ff86eb598ca653dbf7f55325f6aadb09",
"assets/assets/images/leftarrow.png": "4ae66fac1a4613beededdd202cf5e12e",
"assets/assets/images/musicpainting.jpg": "3cc0665f068499b18e112c8542526147",
"assets/assets/images/noor.jpg": "27d81083a9ee892c003629917930f023",
"assets/assets/images/profile.jpg": "8ba7516ee21d9b69c40cb4ef0ea02c0b",
"assets/assets/images/rightarrow.png": "7165561e80ea928ca21e6a58db3f9be9",
"assets/assets/images/studio.jpg": "9d6fa5f2a9da118ff7615fd3c2ddd916",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0c625d99133b8eedff33df44ffed0c18",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "deb5aa8ece82770986230d299d711d22",
"/": "deb5aa8ece82770986230d299d711d22",
"main.dart.js": "a4f2182a76703938409c4ee47980594c",
"manifest.json": "ca43d97c27ce0fb1984b8df946971565",
"version.json": "4215b45757d5cdb08ef71c57a7691b53"
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
