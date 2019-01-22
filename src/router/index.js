import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import lists from '@/pages/lists'
import navTap from '@/components/navTap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lists',
      name: 'lists',
      component: lists
    },
    {
      path: '/navTap',
      name: 'navTap',
      component: navTap
    }
  ]
})
