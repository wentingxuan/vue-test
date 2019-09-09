import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';
import getters from './getters'

Vue.use(Vuex); //使用vuex

//创建vuex实例保存到store中
const store = new Vuex.Store({
  modules:{
    user
  },
  getters
})

//导出store
export default store
