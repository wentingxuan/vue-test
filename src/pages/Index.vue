<template>
  <div class="app">
    <AppHeader class="header-fixed"/>
    <div class="app-body">
      <Sidebar :style="{width: this.isCollapsed?'64px':'200px'}" class="slider-fixed"></Sidebar>
      <main class="main" :style="{'padding-left': this.isCollapsed?'64px':'200px'}">
        <div class="container-fluid">
          <Tags></Tags>
          <BreadCrumb class="bread-crumb" :list="breadList"></BreadCrumb>
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
  import AppHeader from '../components/Header'
  import Tags from '../components/tags'
  import Sidebar from '../components/Silderbar'
  import BreadCrumb from '../components/BreadCrumb'
  import bus from '../components/bus'


  export default {
    name: 'index',
    data(){
      return{
        isCollapsed:false,
        breadList:[],
        tagsList:[]
      }
    },
    components: {
      AppHeader,
      Sidebar,
      Tags,
      BreadCrumb,
    },
    created(){
      this.getBreadcrumb();
      bus.$on('tags', msg => {
        let arr = [];
        for(let i = 0, len = msg.length; i < len; i ++){
          msg[i].name && arr.push(msg[i].name);
        }
        this.tagsList = arr;
      })
    },
    watch: {
        $route () {
         this.getBreadcrumb()
       }
     },
    methods: {
       getBreadcrumb () {
          this.breadList = this.$route.matched;
       }
    }
  }
</script>

<style>
  .header-fixed{
    position: fixed;
    z-index: 10;
    width: 100%;
  }
  .app-body{
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    margin-top:54px;
  }
  .slider-fixed{
    position: fixed;
    width: 200px;
    height: 100%;
  }
  .main{
    width:88%;
  }
  .bread-crumb{
    line-height: 56px;
    margin-left:30px;
  }
</style>
