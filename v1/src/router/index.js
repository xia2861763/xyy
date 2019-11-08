import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: 'List',
          name: 'List',
          component: () => import(/* webpackChunkName: "List" */ '../views/List.vue')
        },
        {
          path: 'User',
          name: 'User',
          component: () => import(/* webpackChunkName: "User" */ '../views/User.vue')
        }

      ]
    },
    {
      path:'/Add',
      name:'Add',
      component: () => import(/* webpackChunkName: "Add" */ '../views/Add.vue')
    },
    {
      path:'/BsTest',
      name:'BsTest',
      component: () => import(/* webpackChunkName: "Add" */ '../views/BsTest.vue')
    }
  ]
})
