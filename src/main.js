// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import store from './store'
import VueToastPanel from './plugin/test'

// import './login.js'

import Cookies from 'js-cookie';

import '@/mock/index.js';  // 使用mockjs模拟

Vue.use(Cookies);

Vue.use(ElementUI);
Vue.use(VueToastPanel);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>',
  render: h => h(App)
})
