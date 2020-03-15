import router from './router'
import { Route } from 'vue-router'
import { UserModule } from '@/store/modules/userInfo'
import { asyncRoutes, constantRoutes } from '@/router'

// 防止页面刷新数据丢失
let userInfo = localStorage.getItem('userInfo')
if (userInfo) {
  userInfo = JSON.parse(userInfo)
  UserModule.SET_USER_INFO(userInfo)
}

// route2: api获取， router1：本地已存储
const formatAsyncRoutes = (apiRoutes, asyncRoutes) => {
  let res: any = []
  apiRoutes.map(item1 => {
    asyncRoutes.map(item2 => {
      if (item1.path === item2.path) {
        let temp = item2
        if (item1.children) {
          temp.children = formatAsyncRoutes(item1.children, item2.children)
        }
        res.push(temp)
      }
    })
  })
  res = constantRoutes.concat(res)
  return res
}

router.beforeEach(async (to: Route, from: Route, next: any) => {
  if (to.path === '/login') {
    next()
  } else {
    const hasRoute = UserModule.userInfo.dataList.length
    if (hasRoute) {
      try {
        // const accessRoutes = formatAsyncRoutes(
        //   UserModule.userInfo.dataList,
        //   asyncRoutes
        // )
        // router.addRoutes(accessRoutes)
        next()
      } catch {
        next('/login')
      }
    } else {
      next('/login')
    }
  }
})
