// 导入vuex 装饰器方法
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { getSidebarStatus, setSidebarStatus } from '@/utils/cookies'
import store from '@/store'

// app状态接口
export interface IAppState {
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
}
// 动态模块定义
// dynamic:boolean 在store创建之后，再添加到store中。开启dynamic之后必须提供下面的属性
// name:string 指定模块名称
// store:Vuex.Store实体提供初始的store
@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
  // 定义state
  public sidebar = {
    // opened: getSidebarStatus() !== 'closed',
    opened: true,
    withoutAnimation: false
  }

  // 修改 state
  @Mutation
  private TOGGLE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.opened = !this.sidebar.opened
    this.sidebar.withoutAnimation = withoutAnimation
    if (this.sidebar.opened) {
      setSidebarStatus('opened')
    } else {
      setSidebarStatus('closed')
    }
  }

  @Mutation
  private CLOSE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.opened = false
    this.sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus('closed')
  }

  @Action
  public ToggleSideBar(withoutAnimation: boolean) {
    this.TOGGLE_SIDEBAR(withoutAnimation)
  }

  @Action
  public CloseSideBar(withoutAnimation: boolean) {
    this.CLOSE_SIDEBAR(withoutAnimation)
  }
}

export const AppModule = getModule(App)
