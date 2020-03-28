import Mock from 'mockjs'

const Random = Mock.Random

const operatorRouter = [
  {
    path: '/user-center',
    name: '个人中心',
    parentPath: '/',
    children: [
      {
        path: 'my-fans',
        name: '我的粉丝',
        parentPath: '/user'
      },
      {
        path: 'my-focus',
        name: '我的关注',
        parentPath: '/user-center'
      }
    ]
  },
  {
    path: '/push',
    name: '推送中心',
    parentPath: '/',
    children: [
      {
        path: 'banner',
        name: '轮播图推送',
        parentPath: '/push'
      }
    ]
  }
]

const adminRouter = [
  {
    path: '/permission',
    name: '权限管理',
    parentPath: '/',
    children: [
      {
        path: 'role',
        name: '角色权限',
        parentPath: '/apermission'
      },
      {
        path: 'page',
        name: '页面权限',
        parentPath: '/permission'
      }
    ]
  },
  ...operatorRouter
]

interface IResTemp {
  status: {
    code: number
    message: string
    time: string
  }
  data: {
    userType: string
    dataList: any
  }
}

module.exports = {
  getPageRouter: (data: any) => {
    const resTemp: IResTemp = {
      status: {
        code: 0,
        message: 'success',
        time: Random.now('day', 'yyyy-MM-dd HH:mm:ss')
      },
      data: {
        userType: '',
        dataList: []
      }
    }
    if (data.query.type === 'admin') {
      resTemp.data.userType = 'admin'
      resTemp.data.dataList = adminRouter
    } else if (data.query.type === 'operator') {
      resTemp.data.userType = 'operator'
      resTemp.data.dataList = operatorRouter
    } else {
      resTemp.status.code = 403
      resTemp.status.message = '无法登录，请联系管理员'
      resTemp.data.dataList = []
    }
    return resTemp
  }
}
