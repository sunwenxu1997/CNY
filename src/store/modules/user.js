import { login, getInfo, getMemberInfo } from '@/api/user'
import { getAppId, setAppId, removeToken } from '@/utils/auth'
import { toJsencrypt } from '@/utils'
import { resetRouter } from '@/router'
import { initWxConfig } from '@/utils/wx'

const getDefaultState = () => {
  return {
    token: getAppId(),
    memberId: '',
    name: '',
    avatar: '',
    appId: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_APP_ID: (state, appId) => {
    state.appId = appId
  },
  SET_MEMBER_ID: (state, memberId) => {
    state.memberId = memberId
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      const encryptedUser = toJsencrypt(userInfo)
      login({ username: encryptedUser })
        .then((response) => {
          // 此处是通过接口写入cookie：Access-Token，所以直接取
          const token = getToken()
          commit('SET_TOKEN', token)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // 微信鉴权
  wxAuth({ commit }, url) {
    return new Promise(async (resolve, reject) => {
      try {
        const url = encodeURIComponent(window.location.href)
        const data = await initWxConfig(url)
        const { appId } = data
        commit('SET_APP_ID', appId)
        setAppId(appId)
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  },

  // get user info
  getInfo({ commit }, openid) {
    return new Promise((resolve, reject) => {
      getMemberInfo({
        openid: openid || 'oZnBq5doeBJgfpH8MPmngq4wpV70'
      })
        .then((response) => {
          const { data } = response
          if (!data) {
            return reject('Verification failed, please Login again.')
          }
          const { nickName, img } = data
          commit('SET_NAME', nickName)
          commit('SET_AVATAR', img)
          commit('SET_MEMBER_ID', data.id)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
