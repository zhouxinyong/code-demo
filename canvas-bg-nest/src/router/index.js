import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import CanvasNest from '@/components/CanvasNest/CanvasNest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CanvasNest',
      component: () => import('@/components/CanvasNest/CanvasNest')
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
