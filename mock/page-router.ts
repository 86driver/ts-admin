import Mock from 'mockjs'

let Random = Mock.Random

module.exports = {
  getPageRouter: (data: { type: string }) => {
    return {
      status: {
        code: 0,
        message: 'success',
        time: Random.now('day', 'yyyy-MM-dd HH:mm:ss')
      },
      data: {
        userType: 'admin',
        dataList: [
          {
            path: '/files',
            name: '文件',
            parentPath: '/',
            children: [
              {
                path: '/files/my-file',
                name: '我的文件',
                parentPath: '/files'
              }
            ]
          }
        ]
      }
    }
  }
}
