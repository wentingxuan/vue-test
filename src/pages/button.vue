<template>
  <div>
    <div class="title">基本按钮</div>
    <div class="el-row">
      <button type="button" class="button button-default">默认按钮</button>
      <button type="button" class="button button-primary">主要按钮</button>
      <button type="button" class="button button-success">成功按钮</button>
      <button type="button" class="button button-info">信息按钮</button>
      <button type="button" class="button button-warning">警告按钮</button>
      <button type="button" class="button button-danger">危险按钮</button>
    </div>
    <div class="title">朴素按钮</div>
    <div class="el-row">
      <button type="button" class="button button-default-plain">默认按钮</button>
      <button type="button" class="button button-primary-plain">主要按钮</button>
      <button type="button" class="button button-success-plain">成功按钮</button>
      <button type="button" class="button button-info-plain">信息按钮</button>
      <button type="button" class="button button-warning-plain">警告按钮</button>
      <button type="button" class="button button-danger-plain">危险按钮</button>
    </div>
    <div class="title">圆角按钮</div>
    <div class="el-row">
      <button type="button" class="button button-default button-radius">默认按钮</button>
      <button type="button" class="button button-primary button-radius">主要按钮</button>
      <button type="button" class="button button-success button-radius">成功按钮</button>
      <button type="button" class="button button-info button-radius">信息按钮</button>
      <button type="button" class="button button-warning button-radius">警告按钮</button>
      <button type="button" class="button button-danger button-radius">危险按钮</button>
    </div>
    <div class="title">按钮大小</div>
    <button type="button" class="button button-primary button-large">主要按钮</button>
    <button type="button" class="button button-primary">主要按钮</button>
    <button type="button" class="button button-primary button-small">主要按钮</button>
  </div>

</template>
<script>
  export default {
    name: '按钮',
    data(){
      return{

      }
    }
  }
</script>
<style>
  html:root{
    --btn-color:#ffffff;
    --btn-primary:#409eff;
    --btn-success:#60C62D;
    --btn-info:#575758;
    --btn-warning:#DC8D18;
    --btn-danger:#E12727;
  }
  .title{
    line-height:50px;
  }
  .button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  .button-primary{
    background:var(--btn-primary);
    color:var(--btn-color);
  }
  .button-success{
    background: var(--btn-success);
    color:var(--btn-color);
  }
  .button-info{
    background: var(--btn-info);
    color:var(--btn-color);
  }
  .button-warning{
    background: var(--btn-warning);
    color:var(--btn-color);
  }
  .button-danger{
    background: var(--btn-danger);
    color:var(--btn-color);
  }
  .button-primary-plain{
    color:var(--btn-primary);
    background:var(--btn-color);
  }
  .button-primary-plain:hover{
    background:var(--btn-primary);
    color:var(--btn-color);
  }
  .button-success-plain{
    color: var(--btn-success);
    background:var(--btn-color);
  }
  .button-success-plain:hover{
    background: var(--btn-success);
    color:var(--btn-color);
  }
  .button-info-plain{
    color: var(--btn-info);
    background:var(--btn-color);
  }
  .button-info-plain:hover{
    background: var(--btn-info);
    color:var(--btn-color);
  }
  .button-warning-plain{
    color: var(--btn-warning);
    background:var(--btn-color);
  }
  .button-warning-plain:hover{
    background: var(--btn-warning);
    color:var(--btn-color);
  }
  .button-danger-plain{
    color: var(--btn-danger);
    background:var(--btn-color);
  }
  .button-danger-plain:hover{
    background: var(--btn-danger);
    color:var(--btn-color);
  }
  .button-radius{
    border-radius: 20px;
  }
  .button-large{
     padding: 16px 28px;
   }
  .button-small{
    padding: 8px 16px;
  }
</style>
