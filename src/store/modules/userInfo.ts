import {
  VuexModule,
  Module,
  Mutation,
  getModule,
  Action
} from 'vuex-module-decorators'
import store from '@/store'
import router, { resetRouter, constantRoutes, asyncRoutes } from '@/router'

import { getPageRouter } from '@/api/page-router/page-router.ts'

@Module({ dynamic: true, store, name: 'UserModule' })
class UserInfo extends VuexModule {
  userInfo: LoginUserInfo = {
    userType: '',
    userRoutes: []
  }

  @Mutation
  SET_USER_INFO(userInfo: LoginUserInfo) {
    this.userInfo = userInfo
  }

  @Mutation
  REMOVE_USER_INFO() {
    localStorage.removeItem('userInfo')
    this.userInfo = {
      userType: '',
      userRoutes: []
    }
    router.push('/login')
    resetRouter()
  }

  @Action
  Login(userType: string) {
    return new Promise(resolve => {
      getPageRouter({ type: userType }).then(res => {
        localStorage.setItem('userInfo', JSON.stringify(res.data))
        this.SET_USER_INFO({
          userType: res.data.userType,
          userRoutes: res.data.dataList
        })
        router.setAsyncRoutes(<ApiRoute[]>this.userInfo.userRoutes, asyncRoutes)
        resolve()
      })
    })
  }
}

export const UserModule = getModule(UserInfo)
