const path = require('path');

module.exports = {
  // base: '/blog/',
  repo: 'https://zisefeng.github.io/blog/',
  // host: '',
  dest: 'dist',
  markdown: {
    lineNumbers: true
  },
  title: "潇潇风雨",
  description: '前端进阶',
  dest: './docs/.vuepress/dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    // 更多配置可以参考 https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '笔记', link: '/notes/frontEnd/' },
      { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
      // {
      //   text: 'Languages',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // },
      { text: 'contact', 
        icon: 'reco-message',
        items: [
          { text: 'NPM', link: 'https://www.npmjs.com/~reco_luan', icon: 'reco-npm' },
          { text: 'GitHub', link: 'https://github.com/ZiSeFeng', icon: 'reco-github' },
          { text: '简书', link: 'https://www.jianshu.com/u/cd674a19515e', icon: 'reco-jianshu' },
          { text: 'CSDN', link: 'https://blog.csdn.net/maggie_live', icon: 'reco-csdn' },
          { text: '博客圆', link: 'https://www.cnblogs.com/luanhewei/', icon: 'reco-bokeyuan' },
          { text: 'WeChat', link: 'https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A', icon: 'reco-wechat' },
        ]
      }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    sidebar: {
      '/notes/': [
        {
          title: 'vue',
          collapsable: true,
          children: [
            '/notes/frontEnd/vue自定义指令',
            '/notes/frontEnd/如何通过动态更改vue中的样式',
            '/notes/frontEnd/vue-cli3创建项目（1）',
            '/notes/frontEnd/vue-cli3 适配移动端rem',
            '/notes/frontEnd/vue-cli3 使用svg-sprite-loader的使用',
            '/notes/frontEnd/vue-cli 统一封装axios，使用拦截器统一出来请求前和请求后处理',
            '/notes/frontEnd/vue element-UI table嵌套表格 无法更新视图',
            '/notes/frontEnd/vue中使用编辑器vue-quill-editor踩过的坑',
            '/notes/frontEnd/vue中使用element-ui监听键盘事件，input只能输入纯数字',
            '/notes/frontEnd/vue-cli3报错 Jest TypeError_ Path must be a string. Received undefined',
            '/notes/frontEnd/【vue项目总结】后台管理项目总结',
            '/notes/frontEnd/vue 12种通信方式'
          ]
        },
      ]
    },
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'maggie',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2019',
    lastUpdated: 'Last Updated', // string | boolean
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@vuepress': path.join(__dirname, '../images/vuepress'),
  //     }
  //   }
  // },
  algolia: { // 设置搜索
    apiKey: '<API_KEY>',
    indexName: '<INDEX_NAME>'
  },
  valineConfig: {
    appId: '...',// your appId
    appKey: '...', // your appKey
  },
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      undatePopup: {
        '/': {
          message: "New content is available.",
          buttonText: "Refresh"
        },
        '/zh/': {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    }], 
    '@vuepress/medium-zoom',
    'flowchart',
    '@vuepress/nprogress',
    // '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ]
  ]
}  
