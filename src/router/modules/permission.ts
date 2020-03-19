import Layout from '@/layout/index.vue'

const permissionRouter = [
  {
    path: '/permission',
    name: 'Permission',
    component: Layout,
    redirect: '/permission/role',
    meta: {
      title: '权限管理',
      hidden: false
    },
    children: [
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/permission/role.vue'),
        meta: {
          title: '角色权限',
          hidden: false
        }
      },
      {
        path: 'page',
        name: 'Page',
        component: () => import('@/views/permission/page.vue'),
        meta: {
          title: '页面权限',
          hidden: false
        }
      }
    ]
  }
]

export default permissionRouter
