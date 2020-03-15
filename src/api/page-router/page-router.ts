import request from '@/utils/request'

export const getPageRouter = () =>
  request({
    url: '/router',
    method: 'get'
  })
