<template>
  <div class="tree-table">
    <div class="tree-table-head">
      <table>
        <tbody>
        <tr v-for="key in data">
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="tree-table-body">
      <table>
        <tbody></tbody>
      </table>
    </div>
  </div>
</template>
<style lang="less">
  @import "index.less";
</style>
<script>
  export default {
    data(){
      return{
        data:[]
      }
    },
    mounted(){
      this.createTable();

    },
    methods:{
      createTable(option) {
        let $this = this;
        this.data = option.TableData
      }
    }
  }
</script>
