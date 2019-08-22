module.exports = {
  base: '/myblog',
  repo: 'https://zisefeng.github.io/blog/',
  // host: '',
  markdown: {
    lineNumbers: true
  },
  title: "潇潇风雨博客",
  description: '前端工程师 前端进阶',
  dest: 'public',
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
      { text: '学习文档', link: '/notes/frontEnd/' },
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
            '/notes/frontEnd/VueJS组件编码规范',
            '/notes/frontEnd/vue-cli脚手架快速搭建项目',
            '/notes/frontEnd/深入理解vue中的slot与slot-scope'
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
