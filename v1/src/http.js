'use strict'
// import axios from 'axios'
import qs from 'qs'

// 配置请求默认项
axios.defaults = {
  timeout: 10000,
  headers: {
    'Conent-Type': 'application/json'
  }
}
// 设置请求拦截器
axios.interceptors.request.use(config => {
  // 可在这里加请求数据的动效loading
  return config
}, error => {
  return new Promise.reject(error)
})
// 设置响应拦截器
axios.interceptors.response.use(res => {
  // 在这里取消请求数据的动效loading
  return res.data
}, error => {
  // 在这里取消请求数据的动效loading
  return Promise.reject(`响应code：${error.status}\n响应结果：${error.response}`)
})
/**
 * 封装axios.get请求
 * @param {String} url [请求url地址]
 * @param {Object} params [请求携带参数]
 */
export const fetchGet = (url, params) => {
  return new Promise((resolve, reject) => {
    this.$axios.get(url, {
      params: params
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

/**
 * 封装axios.post请求
 * @param {String} url [请求url地址]
 * @param {Objeect} params [请求携带参数]
 * @param {String} responseType [响应数据格式]
 */
export const fetchPost = (url, params, responseType) => {
  return new Promise((resolve, reject) => {
    this.$axios({
      method: 'post',
      url: url,
      data: qs(params),
      responseType: responseType || 'json'
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
/**
 * 封装axios.all并发请求
 * @param {Array} queryList [请求配置项, eg:[{method:'get', url:'api/data'}]]
 */
export const fetchAll = (queryList) => {
  let query = queryList.map((item) => {
    if (item.method === 'get') {
      return fetchGet(item.url, item.params)
    } else {
      return fetchPost(item.url, item.params, item.responseType)
    }
  })
  return new Promise((resolve, reject) => {
    axios.all(query).then(accpt => {
      resolve(accpt)
    }).catch(error => {
      reject(error)
    })
  })
}
