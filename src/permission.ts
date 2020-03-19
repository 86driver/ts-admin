import router from './router'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/userInfo'
import { asyncRoutes } from '@/router'

const formatAsyncRoutes = (
  apiRoutes: ApiRoute[],
  asyncRoutes: LocalRoute[]
) => {
  let res: LocalRoute[] = []
  apiRoutes.map(item1 => {
    asyncRoutes.map(item2 => {
      if (item1.path === item2.path) {
        let temp = item2
        if (item1.children && item2.children) {
          temp.children = formatAsyncRoutes(item1.children, item2.children)
        }
        res.push(temp)
      }
    })
  })
  return res
}

router.beforeEach(async (to: Route, from: Route, next: any) => {
  if (to.path === '/login') {
    next()
  } else {
    const hasRoute = UserModule.userInfo.userRoutes.length
    if (hasRoute) {
      next()
    } else {
      // 防止页面刷新数据丢失
      let userInfo = localStorage.getItem('userInfo')
      if (userInfo) {
        let formatUserInfo: LoginUserInfo = {
          userType: JSON.parse(userInfo).userType,
          userRoutes: JSON.parse(userInfo).dataList
        }
        UserModule.SET_USER_INFO(formatUserInfo)
        const accessRoutes = formatAsyncRoutes(
          <ApiRoute[]>UserModule.userInfo.userRoutes,
          asyncRoutes
        )
        accessRoutes.push({ path: '*', redirect: '/404', hidden: true })
        router.addRoutes(accessRoutes)
        next({ ...to, replace: true })
      } else {
        next('/login')
      }
    }
  }
})
