import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import './lib/customCss'

window.axios = axios
  // axios.defaults.baseURL = 'http://127.0.0.1:8080'
axios.defaults.baseURL = location.protocol + '//' + location.hostname + ':' + location.port;

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuelidate)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')