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
export function getLotteryCount(data) {
  return request({
    url: '/mkt/activity/count',
    method: 'get',
    params: data
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
export function getMyLotteryList(params) {
  return request({
    url: '/mkt/activity/winningListByMemberId',
    method: 'get',
    params
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

// 用户领奖
export function saveAddress(data) {
  return request({
    url: '/mktAwardAddress/save',
    method: 'post',
    data
  })
}

// 根据地址ID取地址信息
export function getAddressById(params) {
  return request({
    url: '/mktAwardAddress/detail',
    method: 'get',
    params,
    hiddenError: true
  })
}

// 通过 openId 查询会员信息
export function getMemberInfo(data) {
  return request({
    url: '/api/v1/app/chief/getMemberInfo',
    method: 'POST',
    data,
    hiddenError: true
  })
}

// 分享得次数
export function shareCount(data) {
  return request({
    url: '/mktShare/save',
    method: 'post',
    data,
    hiddenError: true
  })
}
