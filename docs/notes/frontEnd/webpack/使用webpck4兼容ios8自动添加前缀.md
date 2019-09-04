---
title: 使用webpck4兼容ios8自动添加前缀
date: 2018-07-24
---

最近写了移动端的项目，没有考虑到要兼容ios8。flex布局和css3的transform等没有起到作用。Safari是用webkit内核，需要增加一些前缀，才能起到作用。用webpack构建css样式的时候，使用postcss-loader加载器去做自动加载前缀。

  flex布局，添加前缀：
```css
display: flex;
display: -webkit-flex; 
justify-content: center;
-webkit-justify-content: center;
align-items:center;
-webkit-align-items: center;
align-self: center;
-webkit-align-self: center;
```

  tranform添加前缀：
```css
-webkit-transform: translate(-50%,-50%);
-moz-transform: translate(-50%,-50%);
-ms-transform: translate(-50%,-50%);
-o-transform: translate(-50%,-50%);
transform: translate(-50%,-50%);
```
使用webpack进行构建项目，sass和scss需要编译，需要安装postcss-loader、style-loader、sass-loader、node-loader、autoprefixer

npm install postcss-loader autoprefixer sass-loader node-loader style-loader --save-dev
  在webpack.config.js中把scss进行编译，最终配置如下：
```js
{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { 
                            loader: 'css-loader', 
                            options: { 
                                minimize: true,
                                '-autoprefixer': true
                            } 
                        },
                        'sass-loader',
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: 
                                    [autoprefixer({
                                        browsers: ['ie >= 8','Firefox >= 20', 'Safari >= 5', 'Android >= 4','Ios >= 6', 'last 4 version'],
                                        remove: true
                                    })],
                                sourceMap:true
                            }
                        }
                        
                    ],
                    allChunks: true
                })
            },
```
在package.json增加如下
```package
"browserslist": [
  "default",
  "> 1%",
  "last 2versions",
  "not ie <= 8",
  "iOS < 7"
]
```



