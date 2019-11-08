// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import './assets/jquery/jquery-3.4.1'
import './assets/jquery/jquery-3.4.1.min'
//jquey要在bs之前引入
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.min'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
//让 axios 可以全局使用
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
