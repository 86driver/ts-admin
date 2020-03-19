import Vue from 'vue'
import Router from 'vue-router'

import permissionRouter from './modules/permission'
import pushRouter from './modules/push'
import userCenterRouter from './modules/user-center'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: false,
      title: 'static'
    },
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home.vue'),
        meta: {
          title: '首页',
          hidden: false
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: { hidden: true },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: { hidden: true },
    component: () => import('@/views/error-page/404.vue')
  }
]

export const asyncRoutes = [
  ...permissionRouter,
  ...pushRouter,
  ...userCenterRouter
]

const createRouter = () =>
  new Router({
    mode: 'history',
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes: constantRoutes
  })

const router: any = createRouter()

export function resetRouter() {
  const newRouter: any = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
