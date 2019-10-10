<template>
  <div>
    <div>
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
              @click="addToShopCar(scope.$index, scope.row)">加入购物车</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--<div class="btn-group">-->
        <!--<el-button type="primary" @click="addOrder()">添加</el-button>-->
      <!--</div>-->
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
    name: "storeBuyList",
    data() {
      return {
        orderData:JSON.parse(window.localStorage.getItem('stores')) || []
      }
    },
    methods:{
      addToShopCar:function(){
        this.list = false;
        this.edit = false;
        this.add = true;
        this.orderList = {
          orderName:'',
          price:'',
          desc:''
        }
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
