import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',

      component: () => import('./views/Home.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state._user === '') {
          next('/')
        } else {
          next()
        }
      }
    }
  ]
})
