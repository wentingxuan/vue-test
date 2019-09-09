<template>
  <div style="padding:10px;">
    <upload-view></upload-view>
    <div class="line-splice"></div>
    <div class="drag-upload">拖拽上传</div>
    <drag-upload></drag-upload>
  </div>
</template>
<script>
  import uploadView from '../../components/upload'
  import dragUpload from '../../components/drag_upload'
  export default {
    name:"upload",
    data() {
      return {
        fileList: [
          {
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }
        ]
      };
    },
    provide(){
      return {
        fileList:this.fileList,
        handleRemove:this.handleRemove,
        handlePreview:this.handlePreview
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    },
    components: {
      uploadView:uploadView,
      dragUpload:dragUpload
    }
  }
</script>

<style>
  .drag-upload{
    line-height:40px;
  }
</style>
