import testPanel from './panel.vue'
import testToast from './toast.vue'
//vue暴露出来的扩展方法，在instll方法里添加自己的插件内容
let test = {}
test.install = function (Vue, options) {
  Vue.prototype.$msg = 'Hello I am test.js' // vue全局属性
  //vue 全局方法
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('连接你我')
      return arr
    }
  }
  Vue.component(testPanel.name, testPanel) // testPanel.name 组件的name属性
  Vue.component(testToast.name, testToast) // testToast.name 组件的name属性
}
export default test
