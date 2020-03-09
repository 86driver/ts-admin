import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index.vue'

import filesRouter from './modules/files/files'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Layout,
        meta: {
          breadcrumb: true,
          title: '首页',
          icon: 'menu-home'
        }
      }
    ]
  },
  filesRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
