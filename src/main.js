import Vue from 'vue'
import App from './app'
import router from './router'
import store from './store'
import http from './http/http'

Vue.use(http)
const app = new Vue({
  router,
  store,
  render: (h) => h(App)
})
app.$mount('#app')
