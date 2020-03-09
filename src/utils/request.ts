import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import baseUrl from './envConfig'

const service = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// Request interceptors
service.interceptors.request.use(
  (config) => {
    if (UserModule.token) {
      config.headers['X-Access-Token'] = UserModule.token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // console.log(res)
    const status = response.status
    const statusCode = response.data.status.code
    const message = response.data.status.message
    if (status === 200) {
      return res
    } else {
      Message({
        message: message || 'Error',
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject(new Error(message || 'Error'))
    }
  },
  (error) => {
    // console.log(error.response);
    // 请求配置发生的错误
    if (!error.response) {
      Message({
        message: error.message,
        type: 'error',
        duration: 3 * 1000
      })
    } else {
      Message({
        message: error.response.data.status.message,
        type: 'error',
        duration: 3 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
