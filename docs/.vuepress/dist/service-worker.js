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
    "revision": "56391c71a46f56cc2a4789618eb75e17"
  },
  {
    "url": "assets/css/0.styles.9f074097.css",
    "revision": "c21669dd5f9a0527f60bd8868d69eeea"
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
    "url": "assets/js/10.34f14553.js",
    "revision": "44cb663efb935a0b186317345e54bb11"
  },
  {
    "url": "assets/js/11.d09848bd.js",
    "revision": "d86473c23f5f36d50b0ae0fd23cad1f6"
  },
  {
    "url": "assets/js/12.aeb6c21f.js",
    "revision": "9ee4c91a63debe4b7966ab87b10d81d7"
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
    "url": "assets/js/15.8853c026.js",
    "revision": "114832711c8ae908e7ae5f38ff4a8138"
  },
  {
    "url": "assets/js/16.11849a85.js",
    "revision": "f730222508a8e6da34890b135262ba06"
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
    "url": "assets/js/24.e62c9892.js",
    "revision": "2df05747593595a7fd14b2cf460c2278"
  },
  {
    "url": "assets/js/25.86055239.js",
    "revision": "6c1d3485e3f4f56f9f14101b4d56e923"
  },
  {
    "url": "assets/js/26.80bddf6b.js",
    "revision": "5334e37946b3f48500b0024827ec9274"
  },
  {
    "url": "assets/js/27.a05979a4.js",
    "revision": "eb7d9490ec6105deb381d183ced2ec6f"
  },
  {
    "url": "assets/js/28.d1dd04e0.js",
    "revision": "bcf8ed55cf468a8016f4d5280d80a409"
  },
  {
    "url": "assets/js/29.f17c13d8.js",
    "revision": "7aa2e3f6047e879bc795d2ecbed80f75"
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
    "url": "assets/js/app.3d9b409a.js",
    "revision": "d9dd41dfb1e5835fbee076c77f914705"
  },
  {
    "url": "assets/js/vendors~flowchart.e498eb07.js",
    "revision": "a566e8a3688e0b7eba3dcf788e187047"
  },
  {
    "url": "category/backEnd.html",
    "revision": "cd0efc27bdda175d91aff8ce3b725537"
  },
  {
    "url": "category/frontEnd.html",
    "revision": "ef471fb1d952bbc6bd0e28f39e8d432f"
  },
  {
    "url": "category/index.html",
    "revision": "33f4885e1db431dc7cee3dea1bc4a76b"
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
    "revision": "72283425807de620514d11a7f4ebc03c"
  },
  {
    "url": "notes/frontEnd/【vue项目总结】后台管理项目总结.html",
    "revision": "664493f4cee7a8900551fa441d7df404"
  },
  {
    "url": "notes/frontEnd/index.html",
    "revision": "c1a479166f112775a17010be4a835c13"
  },
  {
    "url": "notes/frontEnd/vue 12种通信方式.html",
    "revision": "3c2e5de86ebcc196b3337eaf54b167cd"
  },
  {
    "url": "notes/frontEnd/vue element-UI table嵌套表格 无法更新视图.html",
    "revision": "daf7d2481b8388d975465904ef6ea935"
  },
  {
    "url": "notes/frontEnd/vue-cli 统一封装axios，使用拦截器统一出来请求前和请求后处理.html",
    "revision": "0ef800db69e7e829ec07f04dfaf3fd84"
  },
  {
    "url": "notes/frontEnd/vue-cli3 使用svg-sprite-loader的使用.html",
    "revision": "858c61577a5c6acd0997d09b8479dca5"
  },
  {
    "url": "notes/frontEnd/vue-cli3 适配移动端rem.html",
    "revision": "bd3460ccaf0d5074edce193644a206c9"
  },
  {
    "url": "notes/frontEnd/vue-cli3创建项目（1）.html",
    "revision": "5a8474058429fa56309a1105eca0897e"
  },
  {
    "url": "notes/frontEnd/vue-cli3报错 Jest TypeError_ Path must be a string. Received undefined.html",
    "revision": "ad8dba5551728aebbde382efc863d607"
  },
  {
    "url": "notes/frontEnd/vue中使用element-ui监听键盘事件，input只能输入纯数字.html",
    "revision": "4ba0e480d061349ca91ba406b2ec1f10"
  },
  {
    "url": "notes/frontEnd/vue中使用编辑器vue-quill-editor踩过的坑.html",
    "revision": "254c86aaa8307ea5fff81c2a1dc3237d"
  },
  {
    "url": "notes/frontEnd/vue自定义指令.html",
    "revision": "2fe2ec889a57c8ba640e9f4f6c6031b7"
  },
  {
    "url": "notes/frontEnd/webpack入门.html",
    "revision": "479e74e031ac6d666eebbae1b722bdf4"
  },
  {
    "url": "notes/frontEnd/如何通过动态更改vue中的样式.html",
    "revision": "93a84b3798b61006305c88c572da16c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a27bd7bc954a7b62c94634652083de5d"
  },
  {
    "url": "tag/tag1.html",
    "revision": "3810b0135d8079f8fadfe62c470d5d0e"
  },
  {
    "url": "tag/tag2.html",
    "revision": "796fdf35d2d1ba2270b0d83ff500f177"
  },
  {
    "url": "tag/tag3.html",
    "revision": "176bacf7752c561c403541c4c600aacd"
  },
  {
    "url": "tag/tag4.html",
    "revision": "a7b3af8ffe38203996a74bc16e062cc4"
  },
  {
    "url": "timeLine/index.html",
    "revision": "b9fea7a769d8c77c55f16189e9b91b04"
  },
  {
    "url": "views/backEnd/2016/121501.html",
    "revision": "862fbef7e2fe52f02d3123e67c9faa57"
  },
  {
    "url": "views/backEnd/2017/092101.html",
    "revision": "1688cc9c7a729645707ec6593dc1128d"
  },
  {
    "url": "views/frontEnd/2018/121501.html",
    "revision": "2a82a0788d8847b309e5a9dedf3e92cb"
  },
  {
    "url": "views/frontEnd/2019/092101.html",
    "revision": "c1767f7540976aa4c9f26b2ed2b56ad2"
  },
  {
    "url": "views/other/guide.html",
    "revision": "646686f0459fa558075a21e7d8bde9cb"
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
