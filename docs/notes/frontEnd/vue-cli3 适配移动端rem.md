---
title: vue-cli3 适配移动端rem
date: 2019-7-12
---

 1. 使用vue-cli
> npm install -g @vue/cli   // 使用vue-cli3版本

 2. 自定义功能配置
> - TypeScript
> - TypeScript
> - Progressive Web App (PWA) Support
> - Router
> - Vuex
> - CSS Pre-processors
> - Linter / Formatter
> - Unit Testing
> - E2E Testing
 3. 创建项目
> vue create demo
 4. 选择Manually select features // 自定义功能配置
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190517164544362.png)
5. 选择自定义功能配置
  Babel编译、使用Vue路由、Vue状态管理器、CSS预处理器、代码检测和格式化、以及单元测试
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190517164753186.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21hZ2dpZV9saXZl,size_16,color_FFFFFF,t_70)
  6. 选择css预处理器，具体看选择技术栈
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190517164937760.png)
  7. 选择ESLint的代码规范
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190517165007420.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21hZ2dpZV9saXZl,size_16,color_FFFFFF,t_70)
  8. 进行代码检测，选择在保存时进行检测
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190517165120908.png)
  9. 选择单元测试解决方案，此处选择jest
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/2019051716522953.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21hZ2dpZV9saXZl,size_16,color_FFFFFF,t_70)
  10. 选择Babel、PostCSS、ESLint等配置文件存放位置
  推荐单独保存在各自的配置文件
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190517165425266.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21hZ2dpZV9saXZl,size_16,color_FFFFFF,t_70) 
  11. 
 ```
  ? save this as a preset for future projects? Yes
//是否将以上这些将此保存为未来项目的预配置吗？
? save preset as:vue-test
//描述项目 
```
6. 配置完成后等待vue-cli3完成初始化，使用命令
> vue ui
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190517165741118.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21hZ2dpZV9saXZl,size_16,color_FFFFFF,t_70)
14. vue.config.js
> 在根目录下新建一个vue.config.js文件，进行自定义配置
```
'use strict';
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = 'wechat demo'; // page title
const mockPort = 3000; // mock server port

module.exports = {
  // 修改默认的入口
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  lintOnSave: true, // 关闭eslint规范
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization'
    },
    open: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        target: `http://localhost:${mockPort}`,
        ws: true, // 是否启用websocket
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  filenameHashing: true,
  css: {
    loaderOptions: {
      css: {},
      // sass: {
      //   data: '@import "@styles/skin.scss"'
      // },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75,
            propList: ['*'],
            mediaQuery: false, // 允许在媒体查询中转换px。
            exclude: '/node_modules/',
            minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
            selectorBlackList: ['weui', 'mu'] // 忽略转换正则匹配项
          })
        ]
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '~': resolve('packages')
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload'); // TODO: need test
    config.plugins.delete('prefetch'); // TODO: need test

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();

    // lib目录是组件库最终打包好存放的地方，不需要eslint检查
    // src/docs是存放md文档的地方，也不需要eslint检查
    config.module
      .rule('eslint')
      .exclude.add(path.resolve('lib'))
      .end()
      .exclude.add(path.resolve('src/docs'))
      .end();
    // packages和src目录需要加入编译
    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/src/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options;
      });

    config.module
      .rule('images')
      .test(/\.(png|jpg|gif)$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        name: 'images/[name].[ext]',
        limit: 1000
      })
      .end();

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development', config =>
        config.devtool('cheap-source-map')
      );

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end();
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });
      config.optimization.runtimeChunk('single');
    });
  }
};

```
15. 适配移动端
- 使用终端命令
> cnpm i lib-flexible -- save
> cnpm i postcss-px2rem --save

使用postcss-px2rem在移动端使用第三vant库时，字体样式会缩小，vant是以37.5进行适配。
**解决方案：**
>cnpm uninstall postcss-px2rem --save
>cnpm i postcss-px2rem-exclude --save
在postcss.config.js中增加配置
```
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px2rem-exclude': {
      remUnit: 72,
      exclude: /node_modules|folder_name/i
    }
  }
};
```
> 1px的边框容易缺失，使用 /*no*/ 语法来屏蔽该属性转换

遇到的坑：
 1. 插件会转化所有的样式的px。比如引入了第三方UI，也会被转化。使用selectorBlackList字段，来过滤。实际上还是会存在这个问题
 2. 不想px被转化成rem，可以简单的使用大写PX或者是Px；
