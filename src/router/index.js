import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Sign from '@/pages/Sign'
import Index from '@/pages/Index'
const _import = file => () => import('@/pages/' + file + '.vue')

Vue.use(Router)

export const asyncRouterMap = [
  { path: '/', component: Login, hidden: true },
  { path: '/Sign', component: Sign, hidden: true },
  {
    path: '',
    name: '首页',
    component: Index,
    hidden:false,
    children: [

      {path: '/dashboard', name: 'dashboard',component: _import('dashboard')},
      {path: '/component', name: 'component组件',component: _import('component/upload') ,
          children:[
            {path: '/component/upload',name: 'upload上传',component: _import('component/upload')}
          ]
      },
      {path: '/chart',name: 'chart',component: _import('chart')},
      {path: '/table/el_table', name: '表格管理',component: _import('table/el_table')},
      {path: '/form', name: '表单管理',component: _import('form')},
      {path: '/map', name: '地图',component: _import('map')},
    ]
  }]
export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  routes: asyncRouterMap
});


