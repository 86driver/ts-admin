import request from '@/utils/request'

export const getPageRouter = (data: any) =>
  request({
    url: '/router',
    method: 'get'
  })
