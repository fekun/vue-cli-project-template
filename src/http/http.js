import axios from 'axios'
import store from '../store'
const axiosInstance = axios.create()
// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (store.state.token) {
    config.headers.token = store.state.token
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 返回 401 清除token信息并跳转到登录页面
        store.commit('clearToken')
                // router.replace({
                //     path: 'login',
                //     query: { redirect: router.currentRoute.fullPath }
                // })
    }
  }
  return Promise.reject(error)
})
export default {
  install (Vue) {
    Vue.prototype.$axios = axiosInstance
  }
}
