---
title: 如何通过动态更改vue中的样式
date: 2019-07-17
---


通过使用v-bind绑定class和style动态的改变DOM元素的样式。v-bind的基本用法以及它的语法糖，它主要用法是动态更新HTML元素上的属性。

## 绑定class的几种方式
### 1.对象语法
给v-bind:class设置一个对象，可以动态地切换class。例如：
```sh
<div id="app">
  <div :class="{'active': isActive}"></div>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      isActive: true
    }
  })
</script>
```
 对象中也可以传入多个参数，来动态地切换class，:class可以和普通class同存。
 ```sh
 <div id="app">
  <div :class="{'active': isActive, 'error': isError}"></div>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      isActive: true,
      isError: false
    }
  })
</script>
```
当:class的表达式过长或逻辑复杂时，还可以绑定一个计算属性。
```sh
<div id="app">
  <div :class="classes"></div>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      isActive: true,
      error: null
    },
    computed: {
      classes: function() {
        return {
          active: this.isActive && !this.error,
          'text-fail': this.error && this.error.type === 'fail'
        }
      }
  })
</script>
```
除了计算属性，也可以直接绑定一个Object类型的数据，或者使用类似计算属性的methods。

### 2.数组语法
给:class绑定一个数组
```sh
<div id="app">
  <div :class="[activeCls, errorCls]"></div>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      activeCls: ‘active',
      errorCls: 'error'
    }
  })
</script>
```
也可以使用三元表达式切换class
```sh
// 方法1
<div id="app">
  <div :class="[isActive ? ' activeCls: '', errorCls]"></div>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      isActive: true,
      activeCls: 'active',
      errorCls: 'error'
    }
  })
</script>

// 方法2
<div id="app">
  <div :class="[{'active': isActive}, errorCls]"></div>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      isActive: true,
      errorCls: 'error'
    }
  })
</script>

// 方法3
<div id="app">
  <div :class="classes"></div>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      size: 'large',
      disabled: true
    },
    computed: {
      classes: function() {
      return {
        'btn',
        {
          ['btn-'+this.size]: this.size != ',
          ['btn-disabled']: this.disabled
        }
      }
    }
  })
</script>
```
 ### 3.组件上使用
 这种用法使用于自定义组件的最外层是一个根元素，否则无效。当不满足这样的条件或需要给具体的子元素设置类名时，应当使用组件的props来传递。
 ```sh 
 Vue.component('my-component', {
   template: '<p class="text">文本</p>
 });

<div id="app">
  <my-component :class="{'active': isActive}></my-component>
</div>

<script>
  var app = new Vue({
   el: '#app',
   data: {
     isActive: true
   }
  })
 </script>
 ```
 ## 绑定内联样式
 使用:style和:class使用方法类似，也有对象语法和数组语法。
 ```sh
 // 方法一
 <div id="app">
  <div :style="{'color': color, 'fontSize': fontSize+'px}"></div>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      color: 'red',
      fontSize: 14
    }
  })
</script>

//方法二
<div id="app">
  <div :style="styles"></div>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      styles: {
        color: 'red',
        fontSize: 14
    }
  })
</script>
```
