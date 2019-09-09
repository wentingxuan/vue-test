<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="el-bread-crumb">
      <el-breadcrumb-item :to="{ path:item.path }" v-for="(item,index) in list" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        required: true,
        default: () => []
      }
    }
  }
</script>

<style>
  .el-bread-crumb{
    line-height:56px;
  }
</style>
