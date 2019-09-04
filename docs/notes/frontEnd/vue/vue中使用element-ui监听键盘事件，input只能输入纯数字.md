---
title: vue中使用element-ui监听键盘事件，input只能输入纯数字
date: 2019-07-17
---

1.element-ui的input监听事件
  vue中element-ui在使用el-input的时候，由于el-input在输入框的外层添加了一层的<div class="el-input"></div>，把input隐藏在子级，所以el-input添加上了keyup无响应；
```html
<el-input v-model="id" placeholder="ID" @keyup.enter="handleClick"></el-input>
```
解决办法
```html
<el-input v-model="id" placeholder="ID" @keyup.enter.native="handleClick"></el-input>
```
  2. input只能输入纯数字
```html
<el-input v-model.number="num" @keyup.enter.native="handleClick"/>
```