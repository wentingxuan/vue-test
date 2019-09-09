import router from './router'
import store from './store'
import vue from 'vue'

// register global progress.
router.beforeEach((to, from, next) => {
  store.dispatch('getNowRoutes', to);
})

