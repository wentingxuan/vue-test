<template>
  <div style="padding:10px;">
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        fileList:this.fileList
      }
    },
    inject:['fileList','handleRemove','handlePreview'],
    handleRemove(file, fileList){
      this.handleRemove(file, fileList)
    },
    handlePreview(file){
      this.handlePreview(file)
    }
  }
</script>
