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
    "revision": "935a141377dad54b988687e599884ba1"
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
    "url": "assets/js/10.d93f9295.js",
    "revision": "a887450e8206edf836f7e1ac832a8d44"
  },
  {
    "url": "assets/js/11.39a7f5bb.js",
    "revision": "0c4584ee3fb253df7550ad2a9e4b8ab6"
  },
  {
    "url": "assets/js/12.14fec621.js",
    "revision": "f693809af4e0f84e401163c0192beeab"
  },
  {
    "url": "assets/js/13.e5e11607.js",
    "revision": "c76b267ee5e563e5ffc7ba18e8f8c760"
  },
  {
    "url": "assets/js/14.c60aa13b.js",
    "revision": "ab06c8079aa3cb94785dbd7a4123b90d"
  },
  {
    "url": "assets/js/15.4305e8bb.js",
    "revision": "5b73c45e034329c71d96e70af02a5c40"
  },
  {
    "url": "assets/js/16.68bd8f16.js",
    "revision": "a0b3e20a073568c6aced33d12280094b"
  },
  {
    "url": "assets/js/17.c33994d6.js",
    "revision": "b428bc589b37ec54b1718a716c36e863"
  },
  {
    "url": "assets/js/18.37c97fb6.js",
    "revision": "b30ff719d5c45e73546f79f64e839bde"
  },
  {
    "url": "assets/js/19.9294132d.js",
    "revision": "ef341775b6346aa12c455fe531a01cbc"
  },
  {
    "url": "assets/js/20.34ec00a6.js",
    "revision": "d281a2a983edd137c709795f8f9f6b66"
  },
  {
    "url": "assets/js/21.a7d5e2ab.js",
    "revision": "5a287268c65e302e556da0475d5bca6b"
  },
  {
    "url": "assets/js/22.566c64b2.js",
    "revision": "f4d0bed946baae32c0d0134f2890b0d7"
  },
  {
    "url": "assets/js/23.20fafd2d.js",
    "revision": "43abccbf9e1dccd66c736db0153fd25e"
  },
  {
    "url": "assets/js/24.4e1869a2.js",
    "revision": "e0d63feea035df9e9c70b4f8b4bd691f"
  },
  {
    "url": "assets/js/25.d72d5ec7.js",
    "revision": "73d84139d2ae56af2183388166c01986"
  },
  {
    "url": "assets/js/26.88d811cd.js",
    "revision": "9ff2bf020894caa14d258e83b0bd08d6"
  },
  {
    "url": "assets/js/27.29083787.js",
    "revision": "18dbd14fe85ae655b70b7c6503dec6c1"
  },
  {
    "url": "assets/js/28.e601fb73.js",
    "revision": "260638da5a45f34fe595badc4521de6b"
  },
  {
    "url": "assets/js/29.8a013a62.js",
    "revision": "b1f6b953f2161e954db5faf574a128eb"
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
    "url": "assets/js/9.2ebd37bf.js",
    "revision": "5db2200a13793da8cd34c6d5e6177a6d"
  },
  {
    "url": "assets/js/app.fc8981ed.js",
    "revision": "3b80be6ccc6fa70bba14e1f12143c525"
  },
  {
    "url": "assets/js/vendors~flowchart.e498eb07.js",
    "revision": "a566e8a3688e0b7eba3dcf788e187047"
  },
  {
    "url": "category/backEnd.html",
    "revision": "e40ce110776c6e93ec5fd45c6ef1f425"
  },
  {
    "url": "category/frontEnd.html",
    "revision": "7c7e4b7d57cb7c19cebddb1ecbc3cdf1"
  },
  {
    "url": "category/index.html",
    "revision": "ecac75e2a07d932ce0197ce45d6c4039"
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
    "revision": "9c1659e5e191fb2365f75e26954e40e2"
  },
  {
    "url": "notes/frontEnd/【vue项目总结】后台管理项目总结.html",
    "revision": "39c2ef114fc2fa3253a60d53d414aa3c"
  },
  {
    "url": "notes/frontEnd/index.html",
    "revision": "56078f7554863e23fd988a453762a33b"
  },
  {
    "url": "notes/frontEnd/vue 12种通信方式.html",
    "revision": "b4ac00de8b1a01e1ae117d90ecf7638f"
  },
  {
    "url": "notes/frontEnd/vue element-UI table嵌套表格 无法更新视图.html",
    "revision": "d914be121c52c5c21091605d20c80f30"
  },
  {
    "url": "notes/frontEnd/vue-cli 统一封装axios，使用拦截器统一出来请求前和请求后处理.html",
    "revision": "3c3fb334e74b1e0b2fa3c9b5db599d70"
  },
  {
    "url": "notes/frontEnd/vue-cli3 使用svg-sprite-loader的使用.html",
    "revision": "e9e11aaf830f3b0107a716ed16677442"
  },
  {
    "url": "notes/frontEnd/vue-cli3 适配移动端rem.html",
    "revision": "8bd3a4eb50a20c9872f35367c19b7bf7"
  },
  {
    "url": "notes/frontEnd/vue-cli3创建项目（1）.html",
    "revision": "96fa9c957593df0059f051bbc1ec33c5"
  },
  {
    "url": "notes/frontEnd/vue-cli3报错 Jest TypeError_ Path must be a string. Received undefined.html",
    "revision": "66684ae430cd881cabcb2438b981f5f5"
  },
  {
    "url": "notes/frontEnd/vue中使用element-ui监听键盘事件，input只能输入纯数字.html",
    "revision": "0ef901d63289b52c7354924a961e7fbb"
  },
  {
    "url": "notes/frontEnd/vue中使用编辑器vue-quill-editor踩过的坑.html",
    "revision": "6b2bb51c84a39e62be544f69afe457cd"
  },
  {
    "url": "notes/frontEnd/vue自定义指令.html",
    "revision": "413f139387824fa7d83ba5bd5de16919"
  },
  {
    "url": "notes/frontEnd/webpack入门.html",
    "revision": "5f828d26f2e0dcd1cdcc25357f7a9df2"
  },
  {
    "url": "notes/frontEnd/如何通过动态更改vue中的样式.html",
    "revision": "1e673a837c759bedc4da4e6349dcb6e1"
  },
  {
    "url": "tag/index.html",
    "revision": "565bc1923d67397c430daec8cdf2c9a8"
  },
  {
    "url": "tag/tag1.html",
    "revision": "89a922b562c15d93f486cc810d971dda"
  },
  {
    "url": "tag/tag2.html",
    "revision": "108a8de969512a91524770cc6433583b"
  },
  {
    "url": "tag/tag3.html",
    "revision": "aaea1939b3aa6ed9fc60fb9d5a1b33b6"
  },
  {
    "url": "tag/tag4.html",
    "revision": "a0399cf2da0d43800bec19a16fbd6ce0"
  },
  {
    "url": "timeLine/index.html",
    "revision": "cb6cb2a68706aab91749c6fbaeece373"
  },
  {
    "url": "views/backEnd/2016/121501.html",
    "revision": "23eb92140348e88da5e4311f1037c4b9"
  },
  {
    "url": "views/backEnd/2017/092101.html",
    "revision": "cc6bf7cee8d46b904599a39dcb367873"
  },
  {
    "url": "views/frontEnd/2018/121501.html",
    "revision": "a23146ec80a4d7877329d6fee05ae880"
  },
  {
    "url": "views/frontEnd/2019/092101.html",
    "revision": "c6356fa90b9af3f179adf0a9ee77d843"
  },
  {
    "url": "views/other/guide.html",
    "revision": "1f5b932d527d2ed965e5c23ae7f22e0f"
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
