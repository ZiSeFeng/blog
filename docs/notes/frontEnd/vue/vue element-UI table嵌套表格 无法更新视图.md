---
title: vue element-UI table嵌套表格 无法更新视图
date: 2019-05-13
---

1.点击“编辑”，当前的div显示“删除”；

2.查看row.isShow =  true，但是视图没有更新；代码如下：
```html
<template>
  <el-table
    :data="tableData4"
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <div v-show="scope.row.isShow">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, scope.row)"
            type="text"
            size="small">
            删除
          </el-button>
        </div>
        <div v-show="!scope.row.isShow">
          <el-input placeholder="请输入文字">11111111</el-input>
          <el-button
            @click.native.prevent="editRow(scope.$index, scope.row)"
            type="text"
            size="small">
            编辑
          </el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
```
解决方案
  通过vue的$set解决（解决2），具体代码：
``` javascript
editRow(index,row){
  row.isShow = true;
  this.$set(this.tableData, index, row)
}
```
