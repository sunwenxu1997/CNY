import request from '@/http/instance'

export function login(data) {
  return request({
    url: '/user/sys_users:login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/users/info',
    method: 'get'
  })
}

export function getUserList(data) {
  return request({
    url: '/users/page',
    method: 'post',
    data
  })
}
