import { request } from './request'

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

export function getHomeMultidata() {
  // 返回Promise
  return request({
    url: '/home/multidata'
  })
}