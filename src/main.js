import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './styles/index.scss'
import HttpInstaller from './http' // http请求封装
import './permission' // 路由权限控制

Vue.use(Vant)
Vue.use(HttpInstaller)
Vue.config.productionTip = false
// 忽略微信小程序的标签
Vue.config.ignoredElements = [/^wx-/]

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
