import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

// 基础素材/信息二级
const filesBaseRouter: RouteConfig = {
  name: 'FilesBase',
  path: 'files-base',
  redirect: '/files/files-base/files-base-label',
  component: Layout,
  meta: {
    title: '基础素材/信息'
  },
  children: [
    {
      name: 'FilesBaseLabel',
      path: 'files-base-label',
      component: Layout,
      meta: {
        title: '标签'
      }
    },
    {
      name: 'FilesBaseTag',
      path: 'files-base-tag',
      component: Layout,
      meta: {
        title: '角标'
      }
    },
    {
      name: 'FilesBaseResource',
      path: 'files-base-resource',
      component: Layout,
      meta: {
        title: '资源分组'
      }
    }
  ]
}

export default filesBaseRouter
