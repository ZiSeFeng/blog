---
title: vue自定义指令
date: 2019-07-17
---

自定义指定的注册方法分为全局注册和局部注册，比如注册一个v-focus的指令，用于input、textare元素初始化时自动获取焦点。
```sh
// 全局注册
Vue.component('focus', {
  ...
});

// 局部注册
var app = new Vue({
  el: '#app',
  directives: {
    focus: {
      ...
    }
  }
})
```
自定义指令由几个钩子函数组成：
- bind： 只调用一次，指定第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化的动作；
-  inserted：被绑定元素插入父节点时调用（父节点存在即调用，不必存在于document中）的绑定值，可以忽略不必要的模板更新；
- componentUpdated： 被绑定元素所在模板完成一次更新周期时调用；
- unbind：只调用一次，指令与元素解绑时调用。

每个钩子函数都有几个参数可以调用：
- el：指令所绑定的元素，可以用来直接操作DOM；
- binding：一个对象，包含以下属性：
 1. name: 指令名，不包括v-前缀；
 2. value：绑定值， 例如v-my-directive="1+1"， value的值时2；
 3. oldValue ：指令绑定的前一个值，仅在update和compentUpdated钩子中可用，无论值是否改变都可以用；
 4. expression ：绑定值的字符串形式，例如 v-my-directive="1+1"，expression的值时"1+1"；
 5. arg：传给指令的参数，例如v-my-directive:foo，arg的值foo
 6. modifiers：一个包含修饰符的对象，例如 v-my-directive.foo.bar，修饰符对象是modifiers的值时{foo:true, bar:true};
- vnode vue编译生成的虚拟节点；
- oldVnode 上一个虚拟节点仅在update和componentUpdated钩子中用；
