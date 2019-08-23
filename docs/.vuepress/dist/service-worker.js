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
    "revision": "43f3645f342f06d941851d509cffc412"
  },
  {
    "url": "assets/css/0.styles.68f79b53.css",
    "revision": "f7d5a11d878c939f70a06133a59cd265"
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
    "url": "assets/js/10.f025d927.js",
    "revision": "ff8b774978d9e327eebf60ad71e6990e"
  },
  {
    "url": "assets/js/11.d09848bd.js",
    "revision": "d86473c23f5f36d50b0ae0fd23cad1f6"
  },
  {
    "url": "assets/js/12.4673547f.js",
    "revision": "3018610b5451b120fb04a53d4fcc2a4a"
  },
  {
    "url": "assets/js/13.b9955dda.js",
    "revision": "f333342b00ce576e6f8338c304caf628"
  },
  {
    "url": "assets/js/14.c60aa13b.js",
    "revision": "ab06c8079aa3cb94785dbd7a4123b90d"
  },
  {
    "url": "assets/js/15.588523e2.js",
    "revision": "5139fe0bd84091c0eb1bb5d91970636a"
  },
  {
    "url": "assets/js/16.dd50ec94.js",
    "revision": "0677ffce5d1a998158e408ca82aa8ba8"
  },
  {
    "url": "assets/js/17.b400a74e.js",
    "revision": "e95433a3f821f32dbbf2cbc4263b1f0d"
  },
  {
    "url": "assets/js/18.1d42d279.js",
    "revision": "e172bc1121dc80ac0944d3d05928cf2a"
  },
  {
    "url": "assets/js/19.54bb0b63.js",
    "revision": "b1485c290dbd2dd3ee1069ccb639adb2"
  },
  {
    "url": "assets/js/20.9564c99b.js",
    "revision": "37f6646d06f1dcca55c1068e1812067b"
  },
  {
    "url": "assets/js/21.08616afb.js",
    "revision": "ad83dba956c25b38e6757ee8379547b8"
  },
  {
    "url": "assets/js/22.48e4c8d3.js",
    "revision": "6820c95e8ffbe8a9dc12ee7b19fbd62c"
  },
  {
    "url": "assets/js/23.6686d811.js",
    "revision": "64d18aac5ea9a9dca98d23e5487e6de3"
  },
  {
    "url": "assets/js/24.658357e4.js",
    "revision": "8a888db009af15116c1aa165605509b5"
  },
  {
    "url": "assets/js/25.79e1e0c5.js",
    "revision": "d470583031a0833ad4bf2bd939ad6990"
  },
  {
    "url": "assets/js/26.7c3f0974.js",
    "revision": "23fb268ed3cae1ce5957a7deb79a2d7b"
  },
  {
    "url": "assets/js/27.012f6cd0.js",
    "revision": "91be651a447456bb34b5f4eb586c399c"
  },
  {
    "url": "assets/js/28.d1dd04e0.js",
    "revision": "bcf8ed55cf468a8016f4d5280d80a409"
  },
  {
    "url": "assets/js/29.eae70028.js",
    "revision": "9d43f30c3b526fde969563f3c4196604"
  },
  {
    "url": "assets/js/30.5a4822bc.js",
    "revision": "2d4f749282bbc0462606aecd11b041e8"
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
    "url": "assets/js/8.5f9a913f.js",
    "revision": "b26e5bc77cf9c26c4ae4a4676ae0f1b0"
  },
  {
    "url": "assets/js/9.dd9ee758.js",
    "revision": "0bd408282dd935beff03cc6ede04b73d"
  },
  {
    "url": "assets/js/app.b7dd3a2a.js",
    "revision": "02f847f67c1f27271cc7893d465024cc"
  },
  {
    "url": "assets/js/vendors~flowchart.e498eb07.js",
    "revision": "a566e8a3688e0b7eba3dcf788e187047"
  },
  {
    "url": "category/backEnd.html",
    "revision": "4e1687bf7370feefe77a09c8f56b9b20"
  },
  {
    "url": "category/frontEnd.html",
    "revision": "d298e258256011531de1fb632188f8e8"
  },
  {
    "url": "category/index.html",
    "revision": "b1fc5ee930313fbb5986faf7d80f55c3"
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
    "revision": "3e13675004ea7e8439fe0a277b411b91"
  },
  {
    "url": "notes/frontEnd/【vue项目总结】后台管理项目总结.html",
    "revision": "70d3b213a788c6cd912bc83f0847606d"
  },
  {
    "url": "notes/frontEnd/index.html",
    "revision": "96dc578414a74a7b182394ab7b03dd5d"
  },
  {
    "url": "notes/frontEnd/vue 12种通信方式.html",
    "revision": "db5f0c2d1293de7fd791f4d82f5ab720"
  },
  {
    "url": "notes/frontEnd/vue element-UI table嵌套表格 无法更新视图.html",
    "revision": "0c790e7fd5b9d3956172f9522180d7f8"
  },
  {
    "url": "notes/frontEnd/vue-cli 统一封装axios，使用拦截器统一出来请求前和请求后处理.html",
    "revision": "3a5fa147329b4ca7d500f28884706cc9"
  },
  {
    "url": "notes/frontEnd/vue-cli3 使用svg-sprite-loader的使用.html",
    "revision": "af57ae7fbe01e8221b92a9e9bba8e157"
  },
  {
    "url": "notes/frontEnd/vue-cli3 适配移动端rem.html",
    "revision": "e3bed3652c3f4226e29d5f668e8461af"
  },
  {
    "url": "notes/frontEnd/vue-cli3创建项目（1）.html",
    "revision": "59470cca4274108e3b0ab1f4e3af2a20"
  },
  {
    "url": "notes/frontEnd/vue-cli3报错 Jest TypeError_ Path must be a string. Received undefined.html",
    "revision": "94f86ad693744702c120e3fdec7ad61a"
  },
  {
    "url": "notes/frontEnd/vue中使用element-ui监听键盘事件，input只能输入纯数字.html",
    "revision": "29035337a8d0a2c728c4403938aceebd"
  },
  {
    "url": "notes/frontEnd/vue中使用编辑器vue-quill-editor踩过的坑.html",
    "revision": "88765213e070be75209b10157300a56f"
  },
  {
    "url": "notes/frontEnd/vue自定义指令.html",
    "revision": "f84046b8ffd7fe16c2efb433c807b8f3"
  },
  {
    "url": "notes/frontEnd/webpack入门.html",
    "revision": "654cba4cfe53ea5a175ae8cb8d6aa84d"
  },
  {
    "url": "notes/frontEnd/如何通过动态更改vue中的样式.html",
    "revision": "ca16cfc5d234c0c51c2c0b257c5b597f"
  },
  {
    "url": "tag/index.html",
    "revision": "8133b73194fc2b039cfcae26ec74890e"
  },
  {
    "url": "tag/tag1.html",
    "revision": "da774e5fa70cbd3f503fdac6471f6201"
  },
  {
    "url": "tag/tag2.html",
    "revision": "256f0b118b7400d40aff404a32f50ec6"
  },
  {
    "url": "tag/tag3.html",
    "revision": "6593143af0e0d9126bbf215c3f5192be"
  },
  {
    "url": "tag/tag4.html",
    "revision": "a81d7a322791c2bcdb2bb3b418e32da3"
  },
  {
    "url": "timeLine/index.html",
    "revision": "04ec39da2a3b675e860caa850a5025fa"
  },
  {
    "url": "views/backEnd/2016/121501.html",
    "revision": "6bb48ad29faf3fc0db5f8f759c6382f4"
  },
  {
    "url": "views/backEnd/2017/092101.html",
    "revision": "ae30fabc81cbd630eb292a36dad1fe3e"
  },
  {
    "url": "views/frontEnd/2018/121501.html",
    "revision": "21eecd284ec115517615c4fd55cbccee"
  },
  {
    "url": "views/frontEnd/2019/092101.html",
    "revision": "8654a890c5d29f8e319c42afd6815c35"
  },
  {
    "url": "views/other/guide.html",
    "revision": "17fea0f14a6b3c190ccd7c534f58552b"
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
