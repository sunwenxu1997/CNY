import Cookies from 'js-cookie'

const TokenKey = 'Access-Token'
const AppIdKey = 'appId'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setAppId(appId) {
  return Cookies.set(AppIdKey, appId)
}

export function getAppId() {
  return Cookies.get(AppIdKey)
}
