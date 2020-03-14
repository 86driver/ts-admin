import Vue from 'vue'
import VueRouter from 'vue-router'

import filesRouter from './modules/files/files'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home.vue'),
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
