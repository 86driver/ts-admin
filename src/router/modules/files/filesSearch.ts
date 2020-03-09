import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

// 搜索二级
const filesSearchRouter: RouteConfig = {
  name: 'FilesSearch',
  path: 'files-search',
  redirect: '/files/files-search/files-search-ios',
  component: Layout,
  meta: {
    title: '搜索'
  },
  children: [
    {
      name: 'FilesSearchIos',
      path: 'files-search-ios',
      component: Layout,
      meta: {
        title: 'iOS'
      }
    },
    {
      name: 'FilesSearchAndroid',
      path: 'files-search-android',
      component: Layout,
      meta: {
        title: 'Android'
      }
    }
  ]
}

export default filesSearchRouter
