import { VuexModule, Module, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'

interface IUserInfo {
  userInfo: {
    userType: string
    [propName: string]: any
  }
}

@Module({ dynamic: true, store, name: 'UserModule' })
class UserInfo extends VuexModule implements IUserInfo {
  userInfo = {
    userType: '',
    dataList: []
  }

  @Mutation
  public SET_USER_INFO(userInfo: any) {
    this.userInfo = userInfo
  }
}

export const UserModule = getModule(UserInfo)
