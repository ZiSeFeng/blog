---
title: 创建dialog对话框，可拖着
date: 2019-08-27
tags:
 - js
categories:
 - frontEnd
---

```js
class Dialog {
  constructor(text) {
    this.lastX = 0
    this.lastY = 0
    this.x
    this.y
    this.text = text || ''
    this.isMoving = false
    this.dialog
  }
  open() {
    const model = document.createElement('div')
    model.id='model'
    model.style = `
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color:rgba(0,0,0,.3);
    display:flex;
    justify-content: center;
    align-items: center;`
    model.addEventListener('click',this.close.bind(this))
    document.body.appendChild(model)
    this.dialog = document.createElement('div')
    this.dialog.style = `
    padding:20px;
    background-color:white`
    this.dialog.innerText = this.text
    this.dialog.addEventListener('click',e=>{e.stopPropagation()})
    this.dialog.addEventListener('mousedown', this.handleMousedown.bind(this))
    document.addEventListener('mousemove', this.handleMousemove.bind(this))
    document.addEventListener('mouseup', this.handleMouseup.bind(this))
    model.appendChild(this.dialog)
  }
  close() {
    this.dialog.removeEventListener('mousedown',this.handleMousedown)
    document.removeEventListener('mousemove', this.handleMousemove)
    document.removeEventListener('mouseup',this.handleMouseup)
    document.body.removeChild(document.querySelector('#model')) 
  }
  handleMousedown(e) {
    this.isMoving = true
    this.x = e.clientX
    this.y = e.clientY
  }
  handleMousemove(e) {
    if (this.isMoving) {
      this.dialog.style.transform = `translate(${e.clientX - this.x + this.lastX}px,${e.clientY - this.y + this.lastY}px)`
    }
  }
  handleMouseup(e) {
    this.lastX = e.clientX - this.x + this.lastX
    this.lastY = e.clientY - this.y + this.lastY
    this.isMoving = false
  }
}
let dialog = new Dialog('Hello')
dialog.open()
```

```js
class Dialog {
  constructor({ title, content }) {
    this.title = title;
    this.content = content;
    this._dialog = null;          // 全局保存DOM
    this.dialogCss = {              // 样式
      position: "absolute",
      left: "50%",
      top: "50%",
      width: "400px",
      height: "240px",
      border: "1px solid #aaa",
      "box-shadow": "0 2px 3px #aaa",
      "border-radius": "5px",
      transform: "translate(-50%,-50%)",
      cursor: "pointer"
    }
    this.dialogTitleCss = {
      'border-bottom': '1px solid #aaa',
      'margin-bottom': '10px',
      "padding": "10px",
      "margin-top": 0,
    }
    this.dialogContentCss = {
    }
  }
  init() {                      // 创建窗口
    let dialog = document.createElement("div");
    let title = document.createElement("h3");
    let content = document.createElement("div");
    title.innerText = this.title;
    let close = document.createElement("i");
    close.style["float"] = "right";
    close.innerText = "X";
    title.appendChild(close);
    dialog.appendChild(title);
    content.innerHTML = this.content;
    dialog.appendChild(content);
    dialog.id = "dialog_custom";
    dialog.setAttribute("draggable", true);
    for (let key in this.dialogCss) {
      dialog.style[key] = this.dialogCss[key]
    }
    for (let key in this.dialogTitleCss) {
      title.style[key] = this.dialogTitleCss[key]
    }
    document.body.appendChild(dialog);
    this._dialog = dialog;

    close.addEventListener("click", this.close.bind(this));
    dialog.addEventListener("drag", this.beforeDrag);                // 监听拖动事件
    dialog.addEventListener("dragstart", this.onDrag.bind(this));
    dialog.addEventListener("dragend", this.afterDrag.bind(this));
  }
  close() {
    this._dialog.remove();                    // 窗口手动关闭
  }
  beforeDrag() {
    // console.log("拖动了");
  }
  onDrag(event) {
    this._dialog.style.opacity = 0.5;
  }
  afterDrag(event) {
    // console.log(event);
    this._dialog.style.opacity = 1;
    this._dialog.style.transform = "";
    this._dialog.style.left = event.x + "px";
    this._dialog.style.top = event.y + "px";
  }
}
new Dialog({
  title: "弹窗",
  content: "这是一个弹窗",
}).init();
```

```js
class Dialog{
  constructor(){
    this.dialog,
    this.startX,this.startY,
    this.currentX,this.currentY,
    this.isMoveing = false
  }

  open(){
    this.dialog = document.createElement("div");
    this.dialog.style = `
        width:200px;
        height:200px;
        background:rgba(0.0.0.,5);
        position:absolute;
        left:0;
        top:0;`;
    document.body.appendChild(this.dialog);
    this.dialog.addEventListener('mousedown',this.mousedown.bind(this));
    document.addEventListener('mousemove',this.mousemove.bind(this));
    document.addEventListener('mouseup',this.mouseup.bind(this));
  }

  mousedown(event){
    this.isMoveing = true;
    this.startX = event.clientX - this.dialog.offsetLeft;
    this.startY = event.clientY - this.dialog.offsetTop;
  }
  mousemove(event){
    if(!this.isMoveing){
        return;
    }
    this.currentX = event.clientX;
    this.currentY = event.clientY;
    var left = this.currentX - this.startX;
    var top = this.currentY - this.startY;
    var bodyWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var bodyHeight = document.documentElement.clientHeight || document.body.cliengHeight;
    if(left <= 0){
        left = 0;
    }else if(left >= bodyWidth - this.dialog.offsetWidth){
        left = bodyWidth - this.dialog.offsetWidth;
    }
    if(top <= 0){
        top = 0;
    }else if(top >= bodyHeight - this.dialog.offsetHeight){
        top = bodyHeight - this.dialog.offsetHeight
    }
    this.dialog.style.left = left + 'px';
    this.dialog.style.top = top + 'px';
  }
  mouseup(event){
      this.isMoveing = false;
      document.removeEventListener('mousemove', this.mousemove);
      document.removeEventListener('mouseup',this.mouseup);
  }
}
var dialog = new Dialog();
dialog.open();
```

```js
  class Dialog {
    constructor(title, content) {
      this.dialog;
      this.startX; 
      this.startY;
      this.currentX; 
      this.currentY;
      this.title = title || '';
      this.content = content || '';
      this.mask;
      this.isMoveing = false;
    }

    open() {
      // mask蒙层
      this.mask = document.createElement('div');
      this.mask.style = `
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom:0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
      `;
      document.body.appendChild(this.mask);

      // dialog对话框
      this.dialog = document.createElement("div");
      this.dialog.style = `
        width:200px;
        height:200px;
        background-color:rgba(255,255,255,1);
        position:absolute;
        left:0;
        top:0;`;
      // 设置title
      let title = document.createElement('div')
      title.id = 'dialog-content';
      title.innerText = this.title;
      this.dialog.appendChild(title);
      // 设置关闭按钮
      let close = document.createElement('i');
      close.style = `
        float: right;
        margin-right: 8px;
      `
      close.innerText = 'X';
      title.appendChild(close);
      // dialog内容
      let content = document.createElement('div');
      content.innerText = this.content;
      this.dialog.appendChild(content);
      this.mask.appendChild(this.dialog);
      // 事件监听
      close.addEventListener('click', this.close.bind(this));
      this.dialog.addEventListener('mousedown', this.mousedown.bind(this));
      document.addEventListener('mousemove', this.mousemove.bind(this));
      document.addEventListener('mouseup', this.mouseup.bind(this));
    }

    close(){
      this.mask.remove();
    }

    mousedown(event) {
      this.isMoveing = true;
      this.startX = event.clientX - this.dialog.offsetLeft;
      this.startY = event.clientY - this.dialog.offsetTop;
    }
    mousemove(event) {
      if (!this.isMoveing) {
        return;
      }
      this.currentX = event.clientX;
      this.currentY = event.clientY;
      var left = this.currentX - this.startX;
      var top = this.currentY - this.startY;
      var bodyWidth = document.documentElement.clientWidth || document.body.clientWidth;
      var bodyHeight = document.documentElement.clientHeight || document.body.cliengHeight;
      if (left <= 0) {
        left = 0;
      } else if (left >= bodyWidth - this.dialog.offsetWidth) {
        left = bodyWidth - this.dialog.offsetWidth;
      }
      if (top <= 0) {
        top = 0;
      } else if (top >= bodyHeight - this.dialog.offsetHeight) {
        top = bodyHeight - this.dialog.offsetHeight
      }
      this.dialog.style.left = left + 'px';
      this.dialog.style.top = top + 'px';
    }
    mouseup(event) {
      this.isMoveing = false;
      document.removeEventListener('mousemove', this.mousemove);
      document.removeEventListener('mouseup', this.mouseup);
    }
  }
  var dialog = new Dialog('Title', 'This is a Dialog');
  dialog.open();
```