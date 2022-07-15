import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/login'
import User from '@/views/Main/Profile/profile'
import Home from '@/views/Main/Home/home'
import List from '@/views/Main/List/list'
import News from '@/views/Main/News/news'
import City from '@/components/city'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/home/list',
    component: List
  },
  {
    path: '/home/news',
    component: News
  },
  {
    path: '/home/profile',
    component: User
  },
  {
    path: '/city',
    component: City
  }
]

const router = new VueRouter({
  routes
})

export default router
