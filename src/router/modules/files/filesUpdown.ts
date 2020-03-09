import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

// 上/下架应用二级
const filesUpdownRouter: RouteConfig = {
  name: 'FilesUpdown',
  path: 'files-updown',
  redirect: '/files/files-updown/files-updown-ios',
  component: Layout,
  meta: { title: '上/下架应用' },
  children: [
    {
      name: 'FilesUpdownIos',
      path: 'files-updown-ios',
      redirect: '/files/files-updown/files-updown-ios/uping',
      component: Layout,
      meta: { title: 'iOS' },
      children: [
        {
          name: 'FilesUpdownIosUping',
          path: 'uping',
          component: Layout,
          meta: { title: '待上架应用' }
        },
        {
          name: 'FilesUpdownIosSignature',
          path: 'signature',
          component: Layout,
          meta: { title: '签名队列' }
        },
        {
          name: 'FilesUpdownIosUped',
          path: 'uped',
          component: Layout,
          meta: { title: '已上架应用' }
        },
        {
          name: 'FilesUpdownIosDowning',
          path: 'downing',
          component: Layout,
          meta: { title: '待下架应用' }
        },
        {
          name: 'FilesUpdownIosDowned',
          path: 'downed',
          component: Layout,
          meta: { title: '已下架应用' }
        },
        {
          name: 'FilesUpdownIosUpdate',
          path: 'update',
          component: Layout,
          meta: { title: '待更新应用' }
        },
        {
          name: 'FilesUpdownIosRecord',
          path: 'record',
          component: Layout,
          meta: { title: '应用更新记录' }
        }
      ]
    },
    {
      name: 'FilesUpdownAndroid',
      path: 'files-updown-android',
      redirect: '/files/files-updown/files-updown-android/uping',
      component: Layout,
      meta: {
        title: 'Android'
      },
      children: [
        {
          name: 'FilesUpdownAndroidUping',
          path: 'uping',
          component: Layout,
          meta: { title: '待上架应用' }
        },
        {
          name: 'FilesUpdownAndroidUped',
          path: 'uped',
          component: Layout,
          meta: { title: '已上架应用' }
        },
        {
          name: 'FilesUpdownAndroidDowning',
          path: 'downing',
          component: Layout,
          meta: { title: '待下架应用' }
        },
        {
          name: 'FilesUpdownAndroidDowned',
          path: 'downed',
          component: Layout,
          meta: { title: '已下架应用' }
        },
        {
          name: 'FilesUpdownAndroidUpdate',
          path: 'update',
          component: Layout,
          meta: { title: '待更新应用' }
        },
        {
          name: 'FilesUpdownAndroidRecord',
          path: 'record',
          component: Layout,
          meta: { title: '应用更新记录' }
        }
      ]
    }
  ]
}

export default filesUpdownRouter
