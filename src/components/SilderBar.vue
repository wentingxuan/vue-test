<template>
  <div style="width:204px;
    background: rgb(84,92,100);">
    <el-menu
      background-color="#424f63"
      text-color="#fff"
      active-text-color="#65cea7"
      class="menu-wrapper"
      router
      unique-opened
      :collapse="isCollapsed"
      :default-active="$route.path">
      <template v-for="(item, index) in sider_menu_data">
        <el-menu-item class="menu-item" v-if="!item.children" :index="item.path" :key="index">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </template>
          <el-menu-item class="menu-item" v-for="(sub_item, sub_index) in item.children" :index="sub_item.path"
                        :key="sub_index">
            <i :class="sub_item.icon"></i>
            <span slot="title" style="margin-left:12px;">{{sub_item.title}}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'SilderbarItem',
    data(){
      return {
        sider_menu_data: [
          {
            path: '/dashboard',
            title: '首页',
            hidden:false,
            icon: 'el-icon-s-home'
          },
          {
            path: '/component',
            title: 'component组件',
            hidden:false,
            icon: 'el-icon-paperclip',
            children:[
              {path: '/component/upload',title: 'upload',icon:'el-icon-upload2',hidden:false}
            ]
          },
          {
            path: '/table/el_table',
            title: '表格管理',
            icon: 'el-icon-s-check'
          },
          {
            path: '/chart',
            title: '图表管理',
            icon: 'el-icon-s-data'
          },
          {
            path: '/form',
            title: '表单管理',
            icon: 'el-icon-tickets'
          },
          {
            path: '/map',
            title: '地图',
            icon: 'el-icon-map-location'
          }
        ],
        isCollapsed: false,
        adminMenuShow: false
      }
    },
    mounted(){
      this.sendList();
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      sendList(){
        this.$emit('sendListData',this.sider_menu_data)

      }
    },
    mounted(){
      console.log(this.routes)
    }
  }
</script>
