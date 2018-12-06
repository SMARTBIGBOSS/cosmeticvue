import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cosmetic from '@/components/Cosmetics'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cosmetics',
      name: 'Cosmetics',
      component: Cosmetic
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    }
  ]
})
