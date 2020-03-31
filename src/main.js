// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

axios.interceptors.request.use(
  config => {
    // if (config.method === 'post') {
    //   config.data = qs.stringify(config.data)
    // }
    config.method === 'post'
      ? config.data = qs.stringify({...config.data})
      : config.params = {...config.params}
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  components: { App },
  template: '<App/>'
})
