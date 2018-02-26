import axios from 'axios'

import { Message } from 'element-ui'
import { cache } from '@/common/index'

let http = axios.create({
  timeout: 5000,
  withCredentials: true,
})

let TOKEN_CACHE_KEY = 'Demons-Admin-Key'

// request拦截器
http.interceptors.request.use(config => {
  config.headers.common['Demons-Token'] = cache.get(TOKEN_CACHE_KEY)
  return config
}, error => {
  console.error(error) // for debug
  return Promise.reject(error)
})

http.interceptors.response.use(
  response => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    let resp = response.data
    if (resp.code !== 200) {
      // 301: 重新登录
      if (resp.code === 301) {

      } else {
        Message({
          message: resp.msg,
          type: 'error',
          duration: 5 * 1000,
        })
      }
      return Promise.reject('error')
    } else {
      return resp
    }
  },
  error => {
    console.error('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  },
)

export default http
