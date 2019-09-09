<template>

</template>

<script>
  import selfTable from '../../plugin/TableTree/index';
  export default {
    data(){
      return {
        tableData:[]
      }
    },
    mounted(){
      this.getTableList();
    },
    created(){
      //组件实例创建完成，此时dom还未生成
    },
    methods: {
      getTableList() {
        let $this = this;
//        getTableData(data)
        this.$axios.get('api/getTableData')
          .then(response => {
            let $data = response.data.data.list;
            $this.tableData = $data;
            $this.listBank();
          })
      },
      listBank(){
        let $data = $this.tableData;
        if($data)
        {
           for(let i=0;i < $data.length;i++){
             let item = $data[i];

           }
        }
        let tableData = [
          {"name":"用户ID","id":"userId","file":"userID"},
          {"name":"Uid","id":"Uid","file":"Uid"},
          {"name":"用户名","id":"userName","file":"userName"},
          {"name":"日期","id":"date","file":"date"},
          {"name":"地址","id":"address","file":"address"},
          {"name":"状态","id":"state","file":"state"},
        ];
      }
    }
  }
</script>
