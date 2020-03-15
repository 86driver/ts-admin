import Layout from '@/layout/index.vue'

const userCenterRouter = [
  {
    path: '/user-center',
    name: 'UserCenter',
    components: Layout,
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
        components: import('@/views/user-center/my-fans.vue'),
        meta: {
          title: '我的粉丝',
          icon: 'menu-home',
          hidden: false
        }
      },
      {
        path: 'my-fans',
        name: 'MyFans',
        components: import('@/views/user-center/my-focus.vue'),
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
