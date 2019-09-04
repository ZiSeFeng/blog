---
title: vue中使用编辑器vue-quill-editor踩过的坑
date: 2019-05-13
---

结合vue+element-ui+vue-quill+editor二次封装成组件

**1.图片上传**

### 分析原因
项目中使用vue-quill-editor富文本编辑器，在编辑内容的时候，我们往往会编辑图片，而vue-quill-editor默认的处理方式是直接将图片转成base64格式，导致上传的内容十分庞大，且服务器接受post的数据的大小是有限制的，很有可能就提交失败，造成用户体验差。

### 引入element-ui

编辑editor.vue文件
```
<template>
    <div>
        <!-- 图片上传组件辅助-->
        <el-upload
            class="avatar-uploader"
            action=""
            accept="image/jpg, image/jpeg, image/png, image/gif"
            :http-request="upload"
            :before-upload="beforeUploadImg"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :show-file-list="false">
            <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </div>
</template>
<script>
    import axios from '@/API/';
	import { quillEditor } from "vue-quill-editor";
	import COS from "cos-js-sdk-v5";
	import Upload from '@/components/Upload.vue';
	import { addQuillTitle } from '../utils/quill-title.js';

	import "quill/dist/quill.core.css";
	import "quill/dist/quill.snow.css";
	import "quill/dist/quill.bubble.css";
	
    export default {
        data() {
            return {
            }
        },
        methods: {
            // 上传图片前
            beforeUpload(res, file) {
            	const isJPG = file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/jpeg' 
		        const isLt1M = file.size / 1024 / 1024 < 1
		        if (!isJPG) {
		            this.$message.error('支持JPG、PNG格式的图片，大小不得超过1M')
		        }
		        if (!isLt1M) {
		            this.$message.error('文件最大不得超过1M')
		        } 
		        return isJPG && isLt1M
            },
            // 上传图片成功
            uploadSuccess(res, file) {},
            // 上传图片失败
            uploadError(res, file) {},
            // 上传图片处理过程
            upload(req){}
        }
    }
</script>
```

### 在editor.vue中引入vue-quill-editor

```
<template>
    <div>
        <!-- 图片上传组件辅助-->
        <el-upload
            class="avatar-uploader"
            action=""
            accept="image/jpg, image/jpeg, image/png, image/gif"
            :http-request="upload"
            :before-upload="beforeUploadImg"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :show-file-list="false">
            <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <quill-editor  
            class="info-editor"  
            v-model="content" 
            ref="QuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)">
        </quill-editor>
    </div>
</template>
<script>
    import axios from '@/API/';
	import { quillEditor } from "vue-quill-editor";
	import COS from "cos-js-sdk-v5";
	import Upload from '@/components/Upload.vue';
	import { addQuillTitle } from '../utils/quill-title.js';

	import "quill/dist/quill.core.css";
	import "quill/dist/quill.snow.css";
	import "quill/dist/quill.bubble.css";

    // 工具栏配置
    const toolbarOptions = [
	  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
	  ['blockquote', 'code-block'],

	  [{'header': 1}, {'header': 2}],               // custom button values
	  [{'list': 'ordered'}, {'list': 'bullet'}],
	  [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
	  [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
	  [{'direction': 'rtl'}],                         // text direction

	  [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
	  [{'header': [1, 2, 3, 4, 5, 6, false]}],

	  [{'color': []}, {'background': []}],          // dropdown with defaults from theme
	  [{'font': []}],
	  [{'align': []}],
	  ['link', 'image', 'video'],
	  ['clean']                                         // remove formatting button
	]

    export default {
        data() {
            return {
            	editorOption: {
            		placeholder: '请输入编辑内容',
            		theme: 'snow', //主题风格
            		modules: {
            			toolbar: {
            				container: toolbarOptions, // 工具栏
            				handlers: {
            					'image': function (value) {
            						if (value) {
            							document.querySelector('#quill-upload input').click()
            						} else {
            							this.quill.format('image', false);
            						}
            					}
            				}
            			}
            		}
            	}, // 富文本编辑器配置
            	content: '', //富文本内容
            }
        },
        methods: {
            // 上传图片前
            beforeUpload(res, file) {
            	const isJPG = file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/jpeg' 
		        const isLt1M = file.size / 1024 / 1024 < 1
		        if (!isJPG) {
		            this.$message.error('支持JPG、PNG格式的图片，大小不得超过1M')
		        }
		        if (!isLt1M) {
		            this.$message.error('文件最大不得超过1M')
		        } 
		        return isJPG && isLt1M
            },
            // 上传图片成功
            uploadSuccess(res, file) {
            	let quill = this.$refs.QuillEditor.quill;
	            let length = quill.getSelection().index;
	            quill.insertEmbed(length, 'image', url);
	            quill.setSelection(length+1)
            },
            // 上传图片失败
            uploadError(res, file) {
                this.$message.error('图片插入失败')
            },
            // 上传图片处理过程
            upload(req){}
        }
    }
</script>

<style scoped>
.avatar-uploader{
	display: none;
}
</style>
```

## 2.编辑器上增加title提示

在编辑器上增加一个quill-title.js的工具栏的title的配置文件

```
const titleConfig = {
  'ql-bold':'加粗',
  'ql-color':'字体颜色',
  'ql-font':'字体',
  'ql-code':'插入代码',
  'ql-italic':'斜体',
  'ql-link':'添加链接',
  'ql-background':'背景颜色',
  'ql-size':'字体大小',
  'ql-strike':'删除线',
  'ql-script':'上标/下标',
  'ql-underline':'下划线',
  'ql-blockquote':'引用',
  'ql-header':'标题',
  'ql-indent':'缩进',
  'ql-list':'列表',
  'ql-align':'文本对齐',
  'ql-direction':'文本方向',
  'ql-code-block':'代码块',
  'ql-formula':'公式',
  'ql-image':'图片',
  'ql-video':'视频',
  'ql-clean':'清除字体样式'
};



export function addQuillTitle(){
  const oToolBar = document.querySelector('.ql-toolbar'),
        aButton = oToolBar.querySelectorAll('button'),
        aSelect =  oToolBar.querySelectorAll('select'),
        aSpan= oToolBar.querySelectorAll('span');
  aButton.forEach((item)=>{
    if(item.className === 'ql-script'){
      item.value === 'sub' ? item.title = '下标': item.title = '上标';
    }else if(item.className === 'ql-indent'){
      item.value === '+1' ? item.title ='向右缩进': item.title ='向左缩进';
    }else if(item.className === 'ql-list'){
     item.value==='ordered' ? item.title='有序列表' : item.title='无序列表'
    }else if(item.className === 'ql-header'){
     item.value === '1' ? item.title = '标题H1': item.title = '标题H2';
    }else{
     item.title = titleConfig[item.classList[0]];
    }
  });
  aSelect.forEach((item)=>{
    if(item.className!='ql-color'&&item.className!='ql-background'){
     item.parentNode.title = titleConfig[item.classList[0]];
    }
  });
  aSpan.forEach((item)=>{
    if(item.classList[0]==='ql-color'){
      item.title = titleConfig[item.classList[0]];
    }else if(item.classList[0]==='ql-background'){
      item.title = titleConfig[item.classList[0]];
    }
  });
}

```
### 在editor.vue中引入quill-title.js

```
<template>
    <div>
        <!-- 图片上传组件辅助-->
        <el-upload
            class="avatar-uploader"
            action=""
            accept="image/jpg, image/jpeg, image/png, image/gif"
            :http-request="upload"
            :before-upload="beforeUploadImg"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :show-file-list="false">
            <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <quill-editor  
            class="info-editor"  
            v-model="content" 
            ref="QuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)">
        </quill-editor>
    </div>
</template>
<script>
    import axios from '@/API/';
	import { quillEditor } from "vue-quill-editor";
	import COS from "cos-js-sdk-v5";
	import Upload from '@/components/Upload.vue';
	import { addQuillTitle } from '../utils/quill-title.js';

	import "quill/dist/quill.core.css";
	import "quill/dist/quill.snow.css";
	import "quill/dist/quill.bubble.css";

    // 工具栏配置
    const toolbarOptions = [
	  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
	  ['blockquote', 'code-block'],

	  [{'header': 1}, {'header': 2}],               // custom button values
	  [{'list': 'ordered'}, {'list': 'bullet'}],
	  [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
	  [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
	  [{'direction': 'rtl'}],                         // text direction

	  [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
	  [{'header': [1, 2, 3, 4, 5, 6, false]}],

	  [{'color': []}, {'background': []}],          // dropdown with defaults from theme
	  [{'font': []}],
	  [{'align': []}],
	  ['link', 'image', 'video'],
	  ['clean']                                         // remove formatting button
	]

    export default {
        data() {
            return {
            	editorOption: {
            		placeholder: '请输入编辑内容',
            		theme: 'snow', //主题风格
            		modules: {
            			toolbar: {
            				container: toolbarOptions, // 工具栏
            				handlers: {
            					'image': function (value) {
            						if (value) {
            							document.querySelector('#quill-upload input').click()
            						} else {
            							this.quill.format('image', false);
            						}
            					}
            				}
            			}
            		}
            	}, // 富文本编辑器配置
            	content: '', //富文本内容
            }
        },
        mounted(){
	        addQuillTitle();
	    },
        methods: {
            // 上传图片前
            beforeUpload(res, file) {
            	const isJPG = file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/jpeg' 
		        const isLt1M = file.size / 1024 / 1024 < 1
		        if (!isJPG) {
		            this.$message.error('支持JPG、PNG格式的图片，大小不得超过1M')
		        }
		        if (!isLt1M) {
		            this.$message.error('文件最大不得超过1M')
		        } 
		        return isJPG && isLt1M
            },
            // 上传图片成功
            uploadSuccess(res, file) {
            	let quill = this.$refs.QuillEditor.quill;
	            let length = quill.getSelection().index;
	            quill.insertEmbed(length, 'image', url);
	            quill.setSelection(length+1)
            },
            // 上传图片失败
            uploadError(res, file) {
                this.$message.error('图片插入失败')
            },
            // 上传图片处理过程
            upload(req){}
        }
    }
</script>

<style scoped>
.avatar-uploader{
	display: none;
}
</style>
```

