import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

import filesAppRouter from './filesApp'
import filesUpdownRouter from './filesUpdown'
import filesBaseRouter from './filesBase'
import filesSearchRouter from './filesSearch'

// 文件信息一级
const filesRouter: RouteConfig = {
  path: '/files',
  component: Layout,
  redirect: '/files/files-app',
  meta: {
    title: '文件信息',
    icon: 'menu-files'
  },
  children: [
    filesAppRouter,
    filesUpdownRouter,
    filesBaseRouter,
    filesSearchRouter
  ]
}

export default filesRouter
