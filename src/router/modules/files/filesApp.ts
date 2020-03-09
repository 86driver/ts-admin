import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

// 应用信息二级
const filesAppRouter: RouteConfig = {
  name: 'FilesApp',
  path: 'files-app',
  redirect: '/files/files-app/files-app-ios',
  component: Layout,
  meta: {
    title: '应用信息'
  },
  children: [
    {
      name: 'FilesAppIos',
      path: 'files-app-ios',
      component: Layout,
      meta: {
        title: 'iOS'
      }
    },
    {
      name: 'FilesAppAndroid',
      path: 'files-app-android',
      component: Layout,
      meta: {
        title: 'Android'
      }
    },
    // 应用详情
    {
      name: 'AppDetail',
      path: 'app-detail',
      component: Layout,
      meta: {
        title: '应用详情页',
        showTitle: true
      }
    },
    // 新增 | 编辑应用
    {
      name: 'AddApp',
      path: 'add-app',
      component: Layout,
      meta: {
        title: '新增应用',
        showTitle: true
      }
    },
    {
      name: 'EditApp',
      path: 'edit-app',
      component: Layout,
      meta: {
        title: '编辑应用',
        showTitle: true
      }
    },
    // 多语言管理
    {
      name: 'MultiLanguage',
      path: 'multi-language',
      component: Layout,
      meta: {
        title: '多语言管理',
        showTitle: true
      }
    }
  ]
}

export default filesAppRouter
