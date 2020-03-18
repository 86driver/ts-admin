declare interface LoginUserInfo {
  userType: string
  userRoutes: ApiRes
}

declare interface UserRoute {
  path: string
  name?: string
}

declare interface LocalRoute extends UserRoute {
  component?: any
  redirect: string
  meta?: {
    title: string
    icon: string
    hidden: boolean
  }
  children?: any[]
  [propName: string]: any
}

declare interface ApiRoute extends UserRoute {
  parentPath: string
  children?: any[]
  [propName: string]: any
}
