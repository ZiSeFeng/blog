(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{347:function(n,s,t){"use strict";t.r(s);var a=t(14),e=Object(a.a)({},function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("自定义指定的注册方法分为全局注册和局部注册，比如注册一个v-focus的指令，用于input、textare元素初始化时自动获取焦点。")]),n._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[n._v("// 全局注册\nVue.component"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[n._v("'focus'")]),n._v(", "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n// 局部注册\nvar app "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" new Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n  el: "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v("'#app'")]),n._v(",\n  directives: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n    focus: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(".\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br")])]),t("p",[n._v("自定义指令由几个钩子函数组成：")]),n._v(" "),t("ul",[t("li",[n._v("bind： 只调用一次，指定第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化的动作；")]),n._v(" "),t("li",[n._v("inserted：被绑定元素插入父节点时调用（父节点存在即调用，不必存在于document中）的绑定值，可以忽略不必要的模板更新；")]),n._v(" "),t("li",[n._v("componentUpdated： 被绑定元素所在模板完成一次更新周期时调用；")]),n._v(" "),t("li",[n._v("unbind：只调用一次，指令与元素解绑时调用。")])]),n._v(" "),t("p",[n._v("每个钩子函数都有几个参数可以调用：")]),n._v(" "),t("ul",[t("li",[n._v("el：指令所绑定的元素，可以用来直接操作DOM；")]),n._v(" "),t("li",[n._v("binding：一个对象，包含以下属性：")])]),n._v(" "),t("ol",[t("li",[n._v("name: 指令名，不包括v-前缀；")]),n._v(" "),t("li",[n._v('value：绑定值， 例如v-my-directive="1+1"， value的值时2；')]),n._v(" "),t("li",[n._v("oldValue ：指令绑定的前一个值，仅在update和compentUpdated钩子中可用，无论值是否改变都可以用；")]),n._v(" "),t("li",[n._v('expression ：绑定值的字符串形式，例如 v-my-directive="1+1"，expression的值时"1+1"；')]),n._v(" "),t("li",[n._v("arg：传给指令的参数，例如v-my-directive:foo，arg的值foo")]),n._v(" "),t("li",[n._v("modifiers：一个包含修饰符的对象，例如 v-my-directive.foo.bar，修饰符对象是modifiers的值时{foo:true, bar:true};")])]),n._v(" "),t("ul",[t("li",[n._v("vnode vue编译生成的虚拟节点；")]),n._v(" "),t("li",[n._v("oldVnode 上一个虚拟节点仅在update和componentUpdated钩子中用；")])])])},[],!1,null,null,null);s.default=e.exports}}]);