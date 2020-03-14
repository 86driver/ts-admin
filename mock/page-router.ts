import Mock from 'mockjs'

let Random = Mock.Random

module.exports = {
  getPageRouter: () => {
    return {
      status: {
        code: 0,
        message: 'success',
        time: Random.now('day', 'yyyy-MM-dd HH:mm:ss')
      },
      data: {
        dataList: [
          {
            path: '/',
            hidden: false,
            name: '',
            parentPath: ''
          },
          {
            path: '/files',
            name: '文件',
            hidden: false,
            parentPath: '/',
            children: [
              {
                path: '/files/my-file',
                name: '我的文件',
                hidden: false,
                parentPath: '/files'
              }
            ]
          }
        ]
      }
    }
  }
}
