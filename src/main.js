import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import request from './utils/request'
import common from './utils/common'


/* 倒入全局样式表 */
import './assets/css/global.css'


Vue.config.productionTip = false
window.request = request;
window.app = common;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
