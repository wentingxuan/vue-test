<template>
  <div>
    <div v-if="list">
      <el-table
        ref="multipleTable"
        :data="orderData"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="商品名称">
          <template slot-scope="scope">
            <!--<el-popover trigger="hover" placement="top">-->
              <!--<p>姓名: {{ scope.row.orderName }}</p>-->
              <!--<p>住址: {{ scope.row.address }}</p>-->
              <!--<div slot="reference" class="name-wrapper">-->
                <!--<el-tag size="medium">{{ scope.row.orderName }}</el-tag>-->
              <!--</div>-->
            <!--</el-popover>-->
            <span>{{ scope.row.orderName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="价格">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.price }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="商品描述">
          <template slot-scope="scope">
            <span>{{ scope.row.desc }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              @click="deleteOrder(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="btn-group">
        <el-button type="primary" @click="addOrder()">添加</el-button>
      </div>
    </div>
    <div v-if="edit || add" style="width: 50%;">
      <el-form :model="orderList" label-width="100px" ref="orderList">
        <el-form-item label="商品名称" prop="orderName" required>
          <el-input v-model="orderList.orderName"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="price" required>
          <el-input v-model="orderList.price"></el-input>
        </el-form-item>
        <el-form-item label="商品描述" prop="desc" required>
          <el-input type="textarea" v-model="orderList.desc"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn-group">
        <el-button type="primary" @click="sure('orderList')">确定</el-button>
        <el-button @click="goBack()">返回</el-button>
      </div>
    </div>
  </div>
</template>
<style>
  .btn-group{
    position: absolute;
    bottom:20px;
    left:220px;
  }
</style>
<script>
  export default {
    name: "商品管理",
    data() {
      return {
        orderData:JSON.parse(window.localStorage.getItem('stores')) || [],
        list:true,
        edit:false,
        add:false,
        $index:"",
        orderList:{
          orderName:'',
          price:'',
          desc:''
        }
      }
    },
    methods:{
      addOrder:function(){
        this.list = false;
        this.edit = false;
        this.add = true;
        this.orderList = {
          orderName:'',
          price:'',
          desc:''
        }
      },
      deleteOrder:function($index){
        this.orderData.splice(this.orderData.indexOf($index), 1);
        this.setLocalStorgae()
      },
      handleEdit:function($index,$row){
        this.orderList = $row;
        this.list = false;
        this.add = false;
        this.edit = true;
        this.$index = $index;
      },
      sure:function(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.edit)
            {
              this.orderData.splice(this.orderData.indexOf(this.$index), 1);
            }
            this.orderData.push(this.orderList);
            this.setLocalStorgae();
            this.goBack();
//            this.$options.methods.backList();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      goBack:function(){
        this.list = true;
        this.edit = false;
        this.add = false;
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      setLocalStorgae(){
        window.localStorage.setItem('stores', JSON.stringify(this.orderData));
      }
    }
  }
</script>
