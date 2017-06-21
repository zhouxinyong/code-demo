import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: () => import(/* webpackChunkName: 'hello' */ '@/components/Hello')
    },
    {
      path: '/',
      name: 'about',
      component: () => import(/* webpackChunkName: 'about' */ './about')
    }
  ]
})
