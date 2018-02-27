// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http'
import { Lazyload } from 'mint-ui'

Vue.use(Lazyload)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
require('./assets/reset.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  template: '<App/>',
  components: { App }
})
