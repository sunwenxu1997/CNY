import request from '@/http/instance'

export function login(data) {
  return request({
    url: '/user/sys_users:login',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getInfo() {
  return request({
    url: '/users/info',
    method: 'get'
  })
}

// 用户抽奖次数查询
export function getLotteryCount() {
  return request({
    url: '/mkt/activity/count',
    method: 'get'
  })
}

// 用户参与抽奖
export function lottery(data) {
  return request({
    url: '/mkt/activity/join',
    method: 'post',
    data
  })
}

// 中大奖名单获取
export function getLotteryList() {
  return request({
    url: '/mkt/activity/winning/list',
    method: 'get'
  })
}

// 我的中奖记录
export function getMyLotteryList() {
  return request({
    url: '/mkt/activity/winningListByMemberId',
    method: 'get'
  })
}

// 非实物领取奖品
export function receivePrize(data) {
  return request({
    url: '/mkt/activity/award/receive',
    method: 'post',
    data
  })
}

// 保存用户领奖地址
export function saveAddress(data) {
  return request({
    url: '/mktAwardAddress/save',
    method: 'post',
    data
  })
}

// 根据地址ID取地址信息
export function getAddressById(data) {
  return request({
    url: '/mktAwardAddress/detail',
    method: 'get',
    params: data
  })
}
