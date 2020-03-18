import Layout from '@/layout/index.vue'

const pushRouter = [
  {
    path: '/push',
    name: 'Push',
    component: Layout,
    redirect: '/push/banner',
    meta: {
      title: '推送中心',
      icon: 'menu-home',
      hidden: false
    },
    children: [
      {
        path: 'banner',
        name: 'Banner',
        component: () => import('@/views/push/banner.vue'),
        meta: {
          title: '轮播图推送',
          icon: 'menu-home',
          hidden: false
        }
      }
    ]
  }
]

export default pushRouter
