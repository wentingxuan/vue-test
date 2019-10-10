<!--table多选
 手动添加一个el-table-column，设type属性为selection即可
-->
<template>
  <div>
    <div v-if="list">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="用户ID"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.userID }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="用户名"
          width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.userName }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.userName }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          label="日期"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="地址"
          width="150">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.address }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block" style="float: left;width:100%;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage2"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total=total class="pagination">
        </el-pagination>
      </div>
      <div class="btn" style="margin-left: 60px;float: left;">
        <el-row>
          <el-button type="primary" @click="addUser()">添加</el-button>
          <el-button type="success">删除</el-button>
        </el-row>
      </div>
    </div>
    <div v-if="edit">
      <edit-view></edit-view>
    </div>
  </div>

</template>


<script>
  import formBox from './../form.vue';
  export default {
    name:'表格管理',
    provide(){
      return {
        goBack:this.goBack,
      }
    },
    data() {
      return {
        tableData: [],
        total:0,
        list:true,
        edit:false,
        formBox:'formBox',
        currentPage2: 1
      }
    },
    mounted(){
      this.createTable();
    },
    created(){
      //组件实例创建完成，此时dom还未生成
    },
    methods: {
      createTable() {
        let $this = this;
//        getTableData(data)
        this.$axios.get('api/getTableData')
          .then(response => {
            let $data = response.data.data.list;
            $this.tableData = $data;
            $this.total = response.data.data.total
          })
      },
      handleEdit(index, row) {
        //编辑页面返回使用了子页面调用父页面的方法
        this.edit = true;
        this.list = false;
      },
      addUser(){
        this.edit = true;
        this.list = false;
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      goBack() {
        this.edit = false;
        this.list = false;
        this.$nextTick(function(){
          this.list = true;
        })
      }
    },
    components: {
      editView:formBox
    }
  }
</script>

<style>
  .pagination{
    float: right;
    margin:40px 10px;
  }
</style>
