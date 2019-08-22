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
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "517c1a9182fc46e58e2c94a04a7eff2b"
  },
  {
    "url": "assets/css/0.styles.b187ee29.css",
    "revision": "dcdbdbfef0d028f3114e243d26b18ed3"
  },
  {
    "url": "assets/img/home-bg.f5396e30.jpg",
    "revision": "f5396e308f85adecbf70b6f59918b5bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c4e3d890.js",
    "revision": "5054f3569b2b6f9f052d7b3bd8e1b5d7"
  },
  {
    "url": "assets/js/10.9eb39d46.js",
    "revision": "56ca13a0006d747d03ecec18d52dbf9b"
  },
  {
    "url": "assets/js/11.f9ccc0fc.js",
    "revision": "f672ce4fb54b711b5580caf0dbdf4ce7"
  },
  {
    "url": "assets/js/12.ddc603dc.js",
    "revision": "4a090cfd614f0894caedbd66d0819a61"
  },
  {
    "url": "assets/js/13.ee33557f.js",
    "revision": "44f16e3d45069b6ce5149a27e2119475"
  },
  {
    "url": "assets/js/14.d1ceaad8.js",
    "revision": "271a34e9c265e0c086a4b07a7491aad6"
  },
  {
    "url": "assets/js/15.c69cf7a0.js",
    "revision": "d0a4a151af7c6cec7eb08b4d32278015"
  },
  {
    "url": "assets/js/16.99de1cf5.js",
    "revision": "6e6ff28c548d2156051a2e5bca42f5c6"
  },
  {
    "url": "assets/js/17.004456cc.js",
    "revision": "29c14c1e7199a154039f3e286a0bfbdf"
  },
  {
    "url": "assets/js/18.1c2e90dc.js",
    "revision": "e4de9f70e6350d627f966cc5f3cf431d"
  },
  {
    "url": "assets/js/19.b2c701fd.js",
    "revision": "f12c34cb0d182999580772c3665a5f12"
  },
  {
    "url": "assets/js/20.15530dc5.js",
    "revision": "255ffdc54932de6bfdbd0a2771917a20"
  },
  {
    "url": "assets/js/21.906d0d9d.js",
    "revision": "f290c34efdf9dcb602c8c08a22820e42"
  },
  {
    "url": "assets/js/22.02f8b6a3.js",
    "revision": "d3d35184afa14ffe246513a538a6a6f7"
  },
  {
    "url": "assets/js/4.4cc6fc2d.js",
    "revision": "049ac3897cd8e01a8e583a1234164165"
  },
  {
    "url": "assets/js/5.0cc2b899.js",
    "revision": "71dcaf0fd9de37cec4986948f17fcfa9"
  },
  {
    "url": "assets/js/6.e6a567d4.js",
    "revision": "3f61af3f5e67179de08f99417c57991e"
  },
  {
    "url": "assets/js/7.295fe7d3.js",
    "revision": "87dd893e2b3ed52a68d546f254722ac3"
  },
  {
    "url": "assets/js/8.513be801.js",
    "revision": "0b6b7135ee9b3d10b29bd5d6172a4f79"
  },
  {
    "url": "assets/js/9.dd9ee758.js",
    "revision": "0bd408282dd935beff03cc6ede04b73d"
  },
  {
    "url": "assets/js/app.bd8c59e9.js",
    "revision": "a657cb9a641afb21b8afea37481bd22a"
  },
  {
    "url": "assets/js/vendors~flowchart.e498eb07.js",
    "revision": "a566e8a3688e0b7eba3dcf788e187047"
  },
  {
    "url": "category/backEnd.html",
    "revision": "dd3e0522ed7986b42bb4ab93521839b8"
  },
  {
    "url": "category/frontEnd.html",
    "revision": "b63a9fc5184b036bd8f0840a034357f4"
  },
  {
    "url": "category/index.html",
    "revision": "c7c867c526e5f54372545b0bb24cecdf"
  },
  {
    "url": "dock.jpeg",
    "revision": "33620e732a3f26549d5b8cd494857b00"
  },
  {
    "url": "head.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "index.html",
    "revision": "4e0a21e649f7b6c5247c3301d86008bd"
  },
  {
    "url": "notes/frontEnd/index.html",
    "revision": "6eba1e96ec2cc1750725635cf7078f88"
  },
  {
    "url": "notes/frontEnd/PWA介绍及快速上手搭建一个PWA应用.html",
    "revision": "71f93564da508f5673aa43710e5451de"
  },
  {
    "url": "notes/frontEnd/vue-cli脚手架快速搭建项目.html",
    "revision": "7e5fae6604bdc9568850a7cefd2245d1"
  },
  {
    "url": "notes/frontEnd/VueJS组件编码规范.html",
    "revision": "50c3169db5ea97db36ab4c36c062ad95"
  },
  {
    "url": "notes/frontEnd/webpack入门.html",
    "revision": "2900f92a56f819b02a4ecb4be9c5cd77"
  },
  {
    "url": "notes/frontEnd/深入理解vue中的slot与slot-scope.html",
    "revision": "3a27053848df93fbb35af62845099b94"
  },
  {
    "url": "tag/index.html",
    "revision": "1bebf28cb7ae04be481ed932c2ef4a9b"
  },
  {
    "url": "tag/tag1.html",
    "revision": "c6db81c0d362a51ee7c53dffa3dbd77b"
  },
  {
    "url": "tag/tag2.html",
    "revision": "ea59266fd1e62b247b42709983e76712"
  },
  {
    "url": "tag/tag3.html",
    "revision": "329af4f85f3fad4adde95c203bdaa06c"
  },
  {
    "url": "tag/tag4.html",
    "revision": "3d18c9272b5f14ca78f62147222cd58d"
  },
  {
    "url": "timeLine/index.html",
    "revision": "b2d97f0104d58a67b61b9277da75dc0e"
  },
  {
    "url": "views/backEnd/2016/121501.html",
    "revision": "88b1f8c2cae97a50bcd269fe116393ce"
  },
  {
    "url": "views/backEnd/2017/092101.html",
    "revision": "21705d07f16007a18074f6476a5171df"
  },
  {
    "url": "views/frontEnd/2018/121501.html",
    "revision": "da5a8bef56e0687ad377e88450911105"
  },
  {
    "url": "views/frontEnd/2019/092101.html",
    "revision": "35504852940048df6140813eddd89137"
  },
  {
    "url": "views/other/guide.html",
    "revision": "885275664ca2c9d2625d473e9cebe536"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
