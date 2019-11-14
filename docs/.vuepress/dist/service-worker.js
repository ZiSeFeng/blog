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
    "revision": "435146d60aafb0f2c7c551c9192b8056"
  },
  {
    "url": "assets/css/0.styles.2d56dd03.css",
    "revision": "fa9e7afb39841160165e727893f5e1eb"
  },
  {
    "url": "assets/img/1.c8332763.png",
    "revision": "c833276363c834f5fe2a2eadd69207ab"
  },
  {
    "url": "assets/img/2.e5b45b01.png",
    "revision": "e5b45b01efdfd258703bc07f7fe291f8"
  },
  {
    "url": "assets/img/20190111142836783.644457f4.png",
    "revision": "644457f4e5d8e3adfd3339de0d583ddf"
  },
  {
    "url": "assets/img/20190111142906355.e68b43d8.png",
    "revision": "e68b43d8e4d4d2e89d6bc782a233f0d8"
  },
  {
    "url": "assets/img/20190510085443983.2be20155.png",
    "revision": "2be201558baa2fe7d4671eb13928da3d"
  },
  {
    "url": "assets/img/20190510090246337.5f46e7fc.png",
    "revision": "5f46e7fcd1bfffe27328168c208e6697"
  },
  {
    "url": "assets/img/20190510090309938.39fe6b07.png",
    "revision": "39fe6b0752e9bc021710261eca51c9f0"
  },
  {
    "url": "assets/img/20190513104608670.7ed27bcf.png",
    "revision": "7ed27bcf97d0f398c0a8e52d25343f7f"
  },
  {
    "url": "assets/img/20190513104920702.94c60158.png",
    "revision": "94c601582d1f59997d5b4a9b693f5309"
  },
  {
    "url": "assets/img/20190517164544362.6a1e10d8.png",
    "revision": "6a1e10d899dc9bb235f41d868417be71"
  },
  {
    "url": "assets/img/20190517164753186.e2304c6c.png",
    "revision": "e2304c6c3d223b697b315eb31237c871"
  },
  {
    "url": "assets/img/20190517164937760.94038611.png",
    "revision": "940386118ed1bc3631b154943058712a"
  },
  {
    "url": "assets/img/20190517165007420.de7b3c79.png",
    "revision": "de7b3c79221c389bf3fae5ae6a202537"
  },
  {
    "url": "assets/img/20190517165120908.5beb6db2.png",
    "revision": "5beb6db28e1818c70ddbaaa2e5f9013b"
  },
  {
    "url": "assets/img/20190517165425266.b08bc737.png",
    "revision": "b08bc7377010e0c6840f7767a545de13"
  },
  {
    "url": "assets/img/20190517165741118.ba18df4d.png",
    "revision": "ba18df4d7044b1788b5282bcbe068861"
  },
  {
    "url": "assets/img/20190712144104146.6af17d12.png",
    "revision": "6af17d12e6ee1183d0659c8d375cd9bc"
  },
  {
    "url": "assets/img/20190712144247576.04f4d32b.png",
    "revision": "04f4d32b6956685d4fcd6358bb3b60ce"
  },
  {
    "url": "assets/img/20190712144440398.df07c9ac.png",
    "revision": "df07c9acb186993e50bbd5cffc399807"
  },
  {
    "url": "assets/img/20190712144608958.eed28c17.png",
    "revision": "eed28c179c51b7dc11b9e0f64640527b"
  },
  {
    "url": "assets/img/20190712145155294.32c84fa7.png",
    "revision": "32c84fa7f5de9dbf712c442ccd9f8f54"
  },
  {
    "url": "assets/img/20190814113406915.72f0ee2b.png",
    "revision": "72f0ee2b886e264317829750d2197368"
  },
  {
    "url": "assets/img/20190823114905856.62e89226.png",
    "revision": "62e8922682a1d34bd6133b0e81df791a"
  },
  {
    "url": "assets/img/20190823114911483.0b63916a.png",
    "revision": "0b63916a15b2c7ae72d2302d3f5c2478"
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
    "url": "assets/js/1.8473d85e.js",
    "revision": "687c3c118f8feb0acb6780c357fa31f5"
  },
  {
    "url": "assets/js/10.e9e31f89.js",
    "revision": "f3658c474f28560d2186b0abad2b8100"
  },
  {
    "url": "assets/js/11.053ba6b1.js",
    "revision": "44c59b66c8a2678f010cd5e1d14cac43"
  },
  {
    "url": "assets/js/12.514a6621.js",
    "revision": "2b4a632d59e251fc405b20ba7adf5db9"
  },
  {
    "url": "assets/js/13.45a541c5.js",
    "revision": "4b420ea3677dc191e13993f6fb1125cf"
  },
  {
    "url": "assets/js/14.06ec6f79.js",
    "revision": "2cf2c9b2434622ae9442a693a31c9de6"
  },
  {
    "url": "assets/js/15.94d6bb1a.js",
    "revision": "d8a414486933c2e6f351c3bf4acad0a6"
  },
  {
    "url": "assets/js/16.0e16ffe7.js",
    "revision": "b20854d812c1142735f578ec474072ac"
  },
  {
    "url": "assets/js/17.1fd54fb9.js",
    "revision": "e6e5cd137cfe56147728ee6e17aa4eac"
  },
  {
    "url": "assets/js/18.81fd6e7b.js",
    "revision": "75daeba8286a14d22895a6759cc0e090"
  },
  {
    "url": "assets/js/19.91020f3b.js",
    "revision": "0aa2c0925024bbfa0c66addddf49617c"
  },
  {
    "url": "assets/js/20.3f6fcdab.js",
    "revision": "aa0c0a7d6b8c1e7b7a4138c88f39a11b"
  },
  {
    "url": "assets/js/21.f9676d9d.js",
    "revision": "21dc19253c8043ac0ab3914ee75e01b5"
  },
  {
    "url": "assets/js/22.192eda81.js",
    "revision": "906b87b815ee8df196da07e574753fe0"
  },
  {
    "url": "assets/js/23.da692e9a.js",
    "revision": "b1e262f4e43c684760d4682b527e4055"
  },
  {
    "url": "assets/js/24.8bda648e.js",
    "revision": "4a230a5fd9adff90a41d4f14d7b7d7c4"
  },
  {
    "url": "assets/js/25.1155a063.js",
    "revision": "4eba104becf9819a843d696dabdc3098"
  },
  {
    "url": "assets/js/26.98c6dca6.js",
    "revision": "7297a0201d54c3a195626b595208524c"
  },
  {
    "url": "assets/js/27.6e0f6c89.js",
    "revision": "e789c244c052be148a19cc53eac90ae7"
  },
  {
    "url": "assets/js/28.a507f20e.js",
    "revision": "7b71343451fb9b79f2647953d0bfd5e7"
  },
  {
    "url": "assets/js/29.d8176dab.js",
    "revision": "be3d20f06f3059b0a504fdca0685590c"
  },
  {
    "url": "assets/js/30.5ac4a2e6.js",
    "revision": "ce17c9ad328b01009ce38802e3cbb448"
  },
  {
    "url": "assets/js/31.0d204f5a.js",
    "revision": "2ba8fbef4114ae6ef80609745e4b48db"
  },
  {
    "url": "assets/js/32.22f2fecc.js",
    "revision": "5242ddb7e9252067f29d964780342c93"
  },
  {
    "url": "assets/js/33.39c605d1.js",
    "revision": "362ee51f9db758aa9ab925f6f1023e5b"
  },
  {
    "url": "assets/js/34.c4a244d3.js",
    "revision": "916609c39887b3ba7c5b1c863b3b51ba"
  },
  {
    "url": "assets/js/35.b5a8d680.js",
    "revision": "83952cb125764649cfa4275974fbe263"
  },
  {
    "url": "assets/js/36.b45f955d.js",
    "revision": "a8e7b6d7d58924480f0bf9ef865cc4fb"
  },
  {
    "url": "assets/js/37.360f0b40.js",
    "revision": "0d6221b9211875feb7c5befbac808098"
  },
  {
    "url": "assets/js/38.7e986d2b.js",
    "revision": "66c3a326f275432473d04b965440ac80"
  },
  {
    "url": "assets/js/4.69c99a1a.js",
    "revision": "5f5330cfbef6e7c932c388cbb2f1350b"
  },
  {
    "url": "assets/js/5.4c2636b3.js",
    "revision": "bce532ba966a76cea5444d8cfffc4c0a"
  },
  {
    "url": "assets/js/6.7c40bd3e.js",
    "revision": "6f54fc76742fa3aa015ee0045fb1886b"
  },
  {
    "url": "assets/js/7.96565c6c.js",
    "revision": "837d61a372fbdbb2ef0103ac0440b11d"
  },
  {
    "url": "assets/js/8.f3cc7ca1.js",
    "revision": "c778bdba6c204f6c286ed15912997b75"
  },
  {
    "url": "assets/js/9.f1938a4e.js",
    "revision": "0d21b504d9e19e66ac920983ad851968"
  },
  {
    "url": "assets/js/app.f44c4ab1.js",
    "revision": "0321814d571c3854e9f44259c1c305c3"
  },
  {
    "url": "assets/js/vendors~flowchart.6d663048.js",
    "revision": "42f65cd6d574234117509986358bfe8b"
  },
  {
    "url": "category/backEnd.html",
    "revision": "1cd693d063b85488e853be5130275eae"
  },
  {
    "url": "category/develop.html",
    "revision": "76e8966c97717b860f0ea1d6c841cf6d"
  },
  {
    "url": "category/frontEnd.html",
    "revision": "0ab3764c902d691a5957a443db26508b"
  },
  {
    "url": "category/git.html",
    "revision": "ef437ff43f4e7b51bf6b505f058e55b9"
  },
  {
    "url": "category/index.html",
    "revision": "371473b8286372bdfd8ad519a51e412b"
  },
  {
    "url": "category/安全.html",
    "revision": "29d5280339a64401cf4cd019666c79e1"
  },
  {
    "url": "category/计算机基础.html",
    "revision": "830f2a93d47990cd099eeb791d3c55b1"
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
    "revision": "91ca5bf8dd53edd1b6b6aad51c2e8cb1"
  },
  {
    "url": "notes/frontEnd/index.html",
    "revision": "e57bd4f89ec6f4e03bf57ed8510e0171"
  },
  {
    "url": "notes/frontEnd/js/创建dialog对话框，可拖拽.html",
    "revision": "5e3dba922e4c6929acd6148684468c38"
  },
  {
    "url": "notes/frontEnd/js/大型项目前端架构浅谈.html",
    "revision": "6bceb9b38f156e9a8d5e4ac51a0decae"
  },
  {
    "url": "notes/frontEnd/vue/【vue项目总结】后台管理项目总结.html",
    "revision": "ce16d119389d77485267ae1bd2d85812"
  },
  {
    "url": "notes/frontEnd/vue/vue 12种通信方式.html",
    "revision": "f2908746fb4ff620e23b90a3efda0e7d"
  },
  {
    "url": "notes/frontEnd/vue/vue element-UI table嵌套表格 无法更新视图.html",
    "revision": "d4a81e49107ab2be6a1d942722552ea0"
  },
  {
    "url": "notes/frontEnd/vue/vue-cli 统一封装axios，使用拦截器统一出来请求前和请求后处理.html",
    "revision": "e2067eba775da15175477584a059a354"
  },
  {
    "url": "notes/frontEnd/vue/vue-cli3 使用svg-sprite-loader的使用.html",
    "revision": "ff254d693ebc245e36d641a22a898bc0"
  },
  {
    "url": "notes/frontEnd/vue/vue-cli3 适配移动端rem.html",
    "revision": "4e34dc23c8b938f2fc0c21f710fba543"
  },
  {
    "url": "notes/frontEnd/vue/vue-cli3创建项目（1）.html",
    "revision": "ce2ff0eab7df46bbb806fed70389ee1e"
  },
  {
    "url": "notes/frontEnd/vue/vue-cli3报错 Jest TypeError_ Path must be a string. Received undefined.html",
    "revision": "5b4cd70fdbef02cd27c311eb0dd9667c"
  },
  {
    "url": "notes/frontEnd/vue/vue中使用element-ui监听键盘事件，input只能输入纯数字.html",
    "revision": "80c59f3d2ffc5f22aae7e8d49a00566e"
  },
  {
    "url": "notes/frontEnd/vue/vue中使用编辑器vue-quill-editor踩过的坑.html",
    "revision": "3a79dcb81f53f93358340eb29814960c"
  },
  {
    "url": "notes/frontEnd/vue/vue自定义指令.html",
    "revision": "fbd6eedb7fca86ff1a19d1ae5d611ba0"
  },
  {
    "url": "notes/frontEnd/vue/如何通过动态更改vue中的样式.html",
    "revision": "e50bf0b5cd5608b345c054a7fd71ff8d"
  },
  {
    "url": "notes/frontEnd/webpack/使用webpck4兼容ios8自动添加前缀.html",
    "revision": "44abe4cd892b54e78e426044126d2413"
  },
  {
    "url": "notes/frontEnd/webpack入门.html",
    "revision": "21ca8e0215fef6c8c35720318306893c"
  },
  {
    "url": "tag/develop.html",
    "revision": "fdc86cd67ea091fdb019febcaf1be021"
  },
  {
    "url": "tag/git.html",
    "revision": "87e58917ed38d013b3290e14bf12a8df"
  },
  {
    "url": "tag/index.html",
    "revision": "f58037810afb450d659acf1f6909d407"
  },
  {
    "url": "tag/js.html",
    "revision": "c6a6ecb337a79c83157a811672e6fd06"
  },
  {
    "url": "tag/tag1.html",
    "revision": "91457035c20703048fe34f293e4b768c"
  },
  {
    "url": "tag/tag3.html",
    "revision": "75cc746c9af88f24ab031450c5561eed"
  },
  {
    "url": "tag/tag4.html",
    "revision": "4d3821e9682bf7d9ddeb675467addab6"
  },
  {
    "url": "tag/前端安全.html",
    "revision": "fb7429080a73d5acce03eec6544c430b"
  },
  {
    "url": "tag/前端架构.html",
    "revision": "30aa6a512441f9f63367f72abb144cff"
  },
  {
    "url": "tag/计算机基础，frontEnd.html",
    "revision": "33dad338127f7a95dd0102096db09b30"
  },
  {
    "url": "timeLine/index.html",
    "revision": "782d2c47566758b9cc1449502bf942cb"
  },
  {
    "url": "views/backEnd/2016/121501.html",
    "revision": "bd4da8b2cf0c41c1b43311670b0e2ea2"
  },
  {
    "url": "views/backEnd/2017/092101.html",
    "revision": "9492812fb4640f92d47dfd27d7a46eef"
  },
  {
    "url": "views/develop/2019/090501.html",
    "revision": "4f436302298d132c348d3877e56d626d"
  },
  {
    "url": "views/frontEnd/2018/082101.html",
    "revision": "9599e5ebdf8f152a611dc7aae5f122d1"
  },
  {
    "url": "views/frontEnd/2018/121501.html",
    "revision": "2a8b945f962fddbf4f99a5bea9c6a8dc"
  },
  {
    "url": "views/frontEnd/2019/082301.html",
    "revision": "e8c70d2fd70399422dd87cfc6e7aa0b8"
  },
  {
    "url": "views/frontEnd/2019/082601.html",
    "revision": "07e1bd23283857004c1345f951978d26"
  },
  {
    "url": "views/frontEnd/2019/082701.html",
    "revision": "ac20cfc1e003d98961622b629688aeba"
  },
  {
    "url": "views/frontEnd/2019/083001.html",
    "revision": "c98136712eb6b842b61fccc9fc16397d"
  },
  {
    "url": "views/other/guide.html",
    "revision": "835a1efb97de0dc533f3f36bfbe9a3eb"
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
