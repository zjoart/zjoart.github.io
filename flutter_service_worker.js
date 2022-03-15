'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "af5cb0facdebbeabe1f46fed12d84a88",
".git/config": "8450dc34ac1cb9ef88c212d9b0e24348",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "61a0bf952cb0d838407b7b3f3b1c7cf8",
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
".git/index": "c2a862d6a1feb28335abaa76383d0308",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "078c5675a7c5fdd07d367d6677062567",
".git/logs/refs/heads/BasketDevelop": "1b8a447df2c00e22d331bc5ad9760ae9",
".git/logs/refs/heads/Develop": "af1d71a131b2a81a8fea3abbd1ff3056",
".git/logs/refs/heads/testBranch": "ec331c907bc1be31b3c14d6743f2e697",
".git/logs/refs/remotes/origin/testBranch": "9e1b83204c95583b0ec9e81f150ac25e",
".git/objects/01/0637c71005be2c803220e298969b23ca779ae3": "284f4a528374a2c93b9d240d77594b40",
".git/objects/04/c151a937ed6cbb811ab933c832f882cfa75b83": "7f5db7027ffac85ffdfbf0fc4c4de284",
".git/objects/10/b2c7c9758c52329e60e144613f04666d37d2b1": "7af1a2491d065b4eebdf09db4f1ce35e",
".git/objects/12/c1c7bb3c233fdc626387a9da882d0c7140be43": "b23b6ae72f7a56387dd1292bde7d3f0a",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/2c/c54b9e6104f7b3a7df3e4dfebe6705d155fad3": "bdc44d6cb8c3cf175d5a466cb113f787",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/37/480f329635db9c4a0d2899f9452e696e4010a6": "93cb8303058c599ad5e2322657e64fa9",
".git/objects/43/db80c247b21fba9321db9fd54821b30ddee1f4": "6d857eb478810bb242a787134acfb7f2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39d153c52002661b192cae7c3e9d30e03e26a0": "cc532946a6a4fdf5eb27188e0d0ed2e1",
".git/objects/4e/46ac8973fcb854e16be543142ffdc793bec1c1": "eb561029dcb1bae6aabbad0a4ff2bc2d",
".git/objects/57/ca3849c02a7a30c9e69e333700c5d3d45c48b0": "27837a91bbaedfcfad4f7a601c1935d1",
".git/objects/58/ded8662efbcc5cfc0ed1fe6024a01b1ba28491": "87dd5561d3b9fc15397b3127f2d58b93",
".git/objects/5c/a50f82b089dfb43e670941a4d9b7232d7f9f2b": "bb4778b4163f4c0c9014ee1638ef0a6c",
".git/objects/5e/7360178860251456dcd04f0d1eefc1abb9ea5b": "4882a9957ec6e1a87ba078dd9f442e98",
".git/objects/62/517ab2cd2faf4d7a7e09f65d177daed23accc7": "889654f88b4483d567c085a16e9f19dd",
".git/objects/64/1a045940b4330d803a8f6dfab009e49ad4c99b": "15002bb198584377f73b6940d5964fc5",
".git/objects/67/602f9be99e287d2f1d89f417f496227c4a07a0": "97ce3f36e1ab8a3e547bff71dc0dbd03",
".git/objects/75/4b66034b1e6753ab4127a2563627ada742cbb9": "077bb00be193aa0e7c704847c13e865c",
".git/objects/77/6e6e7ec72aaf0b964b19969d6637d9efb120ca": "302b6039fd78f0489068fd963d8c847b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/2e6bbf466eea480293ea304a9f909e21bd57fc": "8006ebcd389b139498ca40ffb9043051",
".git/objects/7c/61cde994b5b3f3a79f5f64ff6932a34f63f6d9": "852be7680ec2ee99e1f9d2a925fd9a7a",
".git/objects/7e/699101e56cae3836d5f3dfa6acbc656d9d6d9c": "379bcdd3d1dc9af5418015f3df82aa3c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/bd3a6e54305064de25a2e20be9c18629ff0ff6": "5f264a3a750ae8e4a10ba661acc25fb6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/3c7fecdcc246e8b5c4e548afd00a3397fc88c0": "ddbf182f19922abf3c67573f0d33686c",
".git/objects/90/df3ad2c2ee3f22497999638e5f0c733472b876": "021a5b5cc677e79a1381da51d4e570e4",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/96/71a6be975472b541da26eb84a4b1fcd4eb6aa7": "9787dde8d95a051209d90277d9a83ab3",
".git/objects/98/d63951b32cb1398ef9fe57160d03bac94d8415": "845c015c0e5497992bd14cb525787cb4",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9b/e3e2b484389c436a0349e9321cf81eb7f1f49d": "952825a8c0bdc035f2f61b7a08a712be",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/829581f0eae5b7cf363b409fce260f1cba3d36": "d37dfdd3bb7c265e0432cd60ed9e5cc1",
".git/objects/a3/33349b673cc5b53326f7ed01ff9de090ff458a": "6ca18b59fe0b2ba7b74c5acca5f8be80",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b3/70ca20c9f5215a982691687503b9b24be8bb9d": "1fd76bb6d63d6de72396bad304a3575e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/fb212bc2d084366dc54882c74e440dafd5cca1": "f4f4c54054c0f9357207ca2ba1e2a90f",
".git/objects/c3/7ba93ac1ce57f66d9558c2ee9cbc03c2f2757a": "a49c9ebd3283a03b251fafb1cfde1f28",
".git/objects/c5/513871d0df36d9d8513472b420042c8d3638ee": "b4ee20357c9dd2fda9d5930a86807c43",
".git/objects/c8/1a076ec4afb9dd8eaacc3662846af881466bc3": "71cbc7c70a0b00db13c21ff695e957e7",
".git/objects/cc/cd6e894e041b9aab41c152e52f58a0d3de3553": "481337bc7f13596af416d35ba9fc4a30",
".git/objects/cd/dc3df0f09a84d79a36b71fd16dc64ab267c558": "c138b8ebd696e15d9e4bec81a88349ab",
".git/objects/ce/21659735a880d4bae4981119e8eb835632708a": "23477ff7bb06c0ca37914f798a4019af",
".git/objects/ce/4249e8fbe501c49aafcf77e70ab09a8e9fdb81": "c0cc67861f4d9b028225247ddec4c949",
".git/objects/d1/ed3557a8e4942669d8c7bee0b8ed232b7eda4f": "0de689ebad40d3e45a5b3ea522b091a6",
".git/objects/d6/427b1e497db1dc83a3600ad2083753dcd4f040": "7e1581af2ad228a4cd8ce64ce3a9ba35",
".git/objects/d6/55a8ab21c1a8dd4e9d436304fa12f1daa1652d": "ec0e84fc80d1fcac8f017b66559eb293",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/77f8c4f4aa40f76a15674f3817557eab2f72b9": "4de93b7ef814ffebeddf2fa1eb18a2a2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/fd8219ebbaf1137a8dc31981df36e84d02aba4": "c85bec6cedbacc2f62f236fd84de5778",
".git/objects/db/97d65009a42a46bd7edc1ed11ca1b166afe820": "9f1230de5804097d03ad71ad1d05dc50",
".git/objects/e1/d3f826a0ed51d7d00ccaf179716042b3718cd4": "ff7c15070867d92110bd0207b52af4c5",
".git/objects/e5/7e21120eb93ab3344c1705c5fa48ddafcda16f": "39040ac28e46c9b874f0598224e4633a",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/588b2ac50983e6510f29fd725dcc703322e71e": "9b8ae7399f8d64c7e9860d565c46232d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/8b345f9c2b608401cf67ba0eaf9efefff5742c": "0ba768b15ce63175c82b0daf2ca98a49",
".git/objects/f5/ae963a04ff5653518c07794239a9ba0c54c073": "def7357d6a83e1191269fd6976bca65b",
".git/objects/fd/1928b4475a4a7b8b4ed039b4b0dba57fa9e4fa": "31d169aec4340d8d3ef3eeec5cc39331",
".git/refs/heads/BasketDevelop": "116fd57c2f66ac9afb657b5a4bf84a56",
".git/refs/heads/Develop": "116fd57c2f66ac9afb657b5a4bf84a56",
".git/refs/heads/testBranch": "223a94aa2411a13f064fee423f290661",
".git/refs/remotes/origin/testBranch": "223a94aa2411a13f064fee423f290661",
"assets/AssetManifest.json": "11ef5da7f59f1634f68037ddde45c6af",
"assets/assets/images/background.png": "d0a96afede27f3069652029e4354c2ce",
"assets/assets/images/basket.png": "1bb7e0531e4b795e1d44afa10634c4bb",
"assets/assets/images/full_robot.png": "23ae1b8c23d487593c225f49ff48c30e",
"assets/assets/images/poster_one.png": "5e710f0c710ac9b5735bdeb65d3f207e",
"assets/assets/images/poster_three.png": "d4ce53d67a12cd58f36a78042cf19fcd",
"assets/assets/images/poster_two.png": "c53ea380a8695a016c0b64302b9a05a7",
"assets/assets/images/profile_one.png": "a271f7e6fc38fee187b47d4cc94ff5cd",
"assets/assets/images/profile_two.png": "2c59226d22bb576365900f28f40e9a2e",
"assets/assets/images/robot.png": "2b7c8d01d787786b64f70d510dc7f9de",
"assets/assets/images/volume.png": "bdbb40c5ea62982b5fb0b572984ab317",
"assets/assets/svg/cloudupload.svg": "c823fcc109d5e54f6ae6d59b5e6069f0",
"assets/assets/svg/coloredsoundwaves.svg": "f7f74974f7695c0e548406dc0cd4920c",
"assets/assets/svg/download.svg": "bd5c736803a6506b3923ce5745492b7b",
"assets/assets/svg/email.svg": "fc4bd0a217337e8a187120d10e5aede2",
"assets/assets/svg/insta.svg": "4f006d6d3620127c177576327362720c",
"assets/assets/svg/logout.svg": "b859039d194af0b9eae892eededbac5e",
"assets/assets/svg/nextIcon.svg": "b755d197294521fd338fbd4d0cce4b86",
"assets/assets/svg/personicon.svg": "4e7d3f1de3151b2229e99523fc3ba489",
"assets/assets/svg/playIcon.svg": "6a8339c427e6f1675d6cf2bf187694fe",
"assets/assets/svg/previousIcon.svg": "72ef91e6b67f42b63d2d084bf78d2b00",
"assets/assets/svg/soundwaves.svg": "57aa307529fe81a3965f496313b825df",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b6189172d4ba670c891b0156802c361a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "060356629a23370fa66e762925da4eac",
"/": "060356629a23370fa66e762925da4eac",
"main.dart.js": "5e58c8e4fc104e19b7086cd4af6b6dea",
"manifest.json": "ca43d97c27ce0fb1984b8df946971565",
"version.json": "197fe2f12adb835f0efbe793e22377df"
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
