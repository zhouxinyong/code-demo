import Vue from 'vue'
import Router from 'vue-router'
const HomePage = () => import('@/pages/homePage')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomePage
    }
  ]
})
