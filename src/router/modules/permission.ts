import Layout from '@/layout/index.vue'

const permissionRouter = [
  {
    path: '/permission',
    name: 'Permission',
    components: Layout,
    redirect: '/permission/role',
    meta: {
      title: '权限管理',
      icon: 'menu-home',
      hidden: false
    },
    children: [
      {
        path: 'role',
        name: 'Role',
        components: import('@/views/permission/role.vue'),
        meta: {
          title: '角色权限',
          icon: 'menu-home',
          hidden: false
        }
      },
      {
        path: 'page',
        name: 'Page',
        components: import('@/views/permission/page.vue'),
        meta: {
          title: '页面权限',
          icon: 'menu-home',
          hidden: false
        }
      }
    ]
  }
]

export default permissionRouter
