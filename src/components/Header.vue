<template>
  <div style="background: #135f92">
    <img src="../assets/logo.png" style="width: 78px;height:40px;
       display: block;padding:10px;padding-bottom: 4px;">
    <el-dropdown class="aside" trigger="click" @command="handleCommand">
      <div class="block">
        <img :src="circleUrl" @click="IsShowUserInfo()"/>
        <span class="show_username">{{username}}</span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-s-custom" command="user-center">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-edit" command="edit-psw">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" command="loginout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>
</template>
<style lang="less">
  .show_username{
    color: #ffffff;
    float: right;
    line-height: 50px;
    margin-left: 10px;
  }
</style>
<script>
  export default {
    data(){
      return{
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        username:""
      }
    },
    mounted(){
      this.GetUserInfo()
    },
//    computed:{
//      ...mapGetters([
//        'username'
//      ])
//    },
    methods:{
      handleCommand(command){
        if(command == 'loginout'){
          this.$router.push('/')
        }
      },
      GetUserInfo(){
        this.$store.dispatch('GetUserInfo').then((res) => {
           this.username = res.data.name
        }).catch(err => {
        });
      },
      IsShowUserInfo(){

      }
    }
  }
</script>

<style>
  .aside{
    position: fixed;
    right:72px;
    top:4px;
    z-index: 30;
    cursor: pointer;
  }
  .aside img{
    height:44px;
  }
</style>
