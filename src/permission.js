import { Toast } from 'vant'
import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false, color: '#cb221c' }) // NProgress Configuration

const whiteList = ['/login', '/'] // 没有重定向白名单

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  // 判断当前用户是否存在用户信息
  const hasGetUserInfo = store.getters.name
  if (hasGetUserInfo) {
    next()
  } else {
    try {
      const { openid } = to.query
      await store.dispatch('user/getInfo', openid || 'oZnBq5doeBJgfpH8MPmngq4wpV70')
      next()
    } catch (error) {
      Toast(error.msg || '获取用户信息失败,请重新授权')
      if (whiteList.indexOf(to.path) !== -1) {
        // 在白名单中，直接进入
        next()
      } else {
        next('/')
        NProgress.done()
      }
    }
  }
})

router.afterEach(() => {
  // 完成进度条
  NProgress.done()
})
