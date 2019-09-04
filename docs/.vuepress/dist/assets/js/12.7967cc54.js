(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{223:function(s,n,e){s.exports=e.p+"assets/img/20190513104608670.7ed27bcf.png"},224:function(s,n,e){s.exports=e.p+"assets/img/20190513104920702.94c60158.png"},258:function(s,n,e){"use strict";e.r(n);var a=e(7),t=Object(a.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-为什么使用svg-sprite-loader？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么使用svg-sprite-loader？","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.为什么使用svg-sprite-loader？")]),s._v(" "),a("blockquote",[a("p",[s._v("用来根据导入的svg文件自动生成symbol标签并插入html，接下来就可以在模板忠方便地使用svg-sprite技术了")])]),s._v(" "),a("p",[s._v("通常我们项目都是使用"),a("a",{attrs:{href:"https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2",target:"_blank",rel:"noopener noreferrer"}},[s._v("iconfont阿里巴巴图标矢量库"),a("OutboundLink")],1),s._v("，"),a("strong",[s._v("缺点：")])]),s._v(" "),a("ul",[a("li",[s._v("操作繁琐，每次ui需要加一些新的图标的时候，都要重新下载图标库的项目，然后把整体的文件（其中包括css,svg,ttf,woff等）替换掉。")]),s._v(" "),a("li",[s._v("如果更改名称的话，需要在图标库里改一次，然后进行下载复制拷贝。")]),s._v(" "),a("li",[s._v("iconfont网站库图标内容有限，特殊业务条件需要uimm们自己设计的图(PSD小图标变身SVG Sprites/font-face历险记)")])]),s._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://cn.vuejs.org/v2/cookbook/editable-svg-icons.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("svg"),a("OutboundLink")],1),s._v("优点：")])]),s._v(" "),a("ul",[a("li",[s._v("图标易于实时修改")]),s._v(" "),a("li",[s._v("图标可以带动画")]),s._v(" "),a("li",[s._v("可以使用标砖的prop和默认值来将图标保持在一个典型的尺寸并随时按需改变他们")]),s._v(" "),a("li",[s._v("图标是内联的，所以不需要额外的HTTP请求")]),s._v(" "),a("li",[s._v("可以动态地使得图标可访问")])]),s._v(" "),a("h2",{attrs:{id:"_2-实现svg-sprite-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现svg-sprite-loader","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.实现svg-sprite-loader")]),s._v(" "),a("ol",[a("li",[s._v("使用终端命名引入")])]),s._v(" "),a("blockquote",[a("p",[s._v("cnpm i svg-sprite-loader --save-dev")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("在vue.config.js配置文件中增加svg的配置")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    // set svg-sprite-loader\n   config.module\n     .rule('svg')\n     .exclude.add(resolve('src/icons'))\n     .end();\n   config.module\n     .rule('icons')\n     .test(/\\.svg$/)\n     .include.add(resolve('src/icons'))\n     .end()\n     .use('svg-sprite-loader')\n     .loader('svg-sprite-loader')\n     .options({\n       symbolId: 'icon-[name]'\n     })\n     .end();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[a("strong",[s._v("注意")])]),s._v(" "),a("ul",[a("li",[s._v("options可以不要，默认的id是svg的文件名=name；")]),s._v(" "),a("li",[s._v("使用svg时，id形式与symbol保持一致；")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<template>\n<svg :class=\"svgClass\" aria-hidden=\"true\" v-on=\"$listeners\">\n <use :xlink:href=\"iconName\" />\n</svg>\n</template>\n\n<script>\nexport default {\nname: 'SvgIcon',\nprops: {\n iconClass: {\n   type: String,\n   required: true\n },\n className: {\n   type: String,\n   default: ''\n }\n},\ncomputed: {\n iconName() {\n   return `#icon-${this.iconClass}`;\n },\n svgClass() {\n   if (this.className) {\n     return 'svg-icon ' + this.className;\n   } else {\n     return 'svg-icon';\n   }\n }\n}\n};\n<\/script>\n\n<style scoped>\n.svg-icon {\nwidth: 1em;\nheight: 1em;\nvertical-align: -0.15em;\nfill: currentColor;\noverflow: hidden;\n}\n</style>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br")])]),a("ul",[a("li",[s._v("引入svg图标，为了方便可吧所有svg图标放在同一个文件夹中，同一个js脚本文件把这些svg图标全部引入")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import Vue from 'vue';\nimport SvgIcon from '@/components/SvgIcon'; // svg组件\n\n// register globally\nVue.component('svg-icon', SvgIcon);\n\nconst req = require.context('./svg', false, /\\.svg$/);\nconst requireAll = requireContext => requireContext.keys().map(requireContext);\nrequireAll(req);\n![在这里插入图片描述](../images/20190513104604542.png)\nexport default req;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("在main.js中引入对应index.js，图标就可以正常显示了。")])]),s._v(" "),a("p",[s._v("在body下有一个svg标签，里面整合了所有的svg图标，每个symbol都有对应ID。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(223),alt:"在这里插入图片描述"}})]),s._v(" "),a("ul",[a("li",[s._v("项目开发中到中期时，svg图标就突然不能正常显示，排期好几天，后面才发现由于引入url-load对图片进行处理base64格式问题，导致svg规则被清除\n"),a("img",{attrs:{src:e(224),alt:"在这里插入图片描述"}})])]),s._v(" "),a("p",[s._v("这里需要把svg删除")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("config.module\n      .rule('images')\n      .test(/\\.(png|jpg|gif)$/) <= 删除svg\n      .use('url-loader')\n      .loader('url-loader')\n      .options({\n        name: 'images/[name].[ext]',\n        limit: 1000\n      })\n      .end();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v("具体组件中使用")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' <svg-icon v-if="icon" icon-class="user"></svg-icon>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])},[],!1,null,null,null);n.default=t.exports}}]);