import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/me',
      name: 'me',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "me" */ './views/Me')
    },
    {
      path: '/jsx',
      name: 'jsx',
      component: () => import(/* webpackChunkName: "test" */ './views/test')
    }
  ]
})
