import Layout from '@/layout/index.vue'

const userCenterRouter = [
  {
    path: '/user-center',
    name: 'UserCenter',
    component: Layout,
    redirect: '/user-center/my-fans',
    meta: {
      title: '个人中心',
      icon: 'menu-home',
      hidden: false
    },
    children: [
      {
        path: 'my-fans',
        name: 'MyFans',
        component: () => import('@/views/user-center/my-fans.vue'),
        meta: {
          title: '我的粉丝',
          icon: 'menu-home',
          hidden: false
        }
      },
      {
        path: 'my-focus',
        name: 'MyFocus',
        component: () => import('@/views/user-center/my-focus.vue'),
        meta: {
          title: '我的关注',
          icon: 'menu-home',
          hidden: false
        }
      }
    ]
  }
]

export default userCenterRouter
