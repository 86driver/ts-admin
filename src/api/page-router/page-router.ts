import request from '@/utils/request'

export const getPageRouter = (data: { type: string }) =>
  request({
    url: '/router',
    method: 'get',
    params: data
  })
