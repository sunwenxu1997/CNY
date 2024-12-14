import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getAppId } from '@/utils/auth' // get token from cookie

NProgress.configure({ showSpinner: false, color: '#cb221c' }) // NProgress Configuration

const whiteList = ['/login'] // 没有重定向白名单

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  // 确定用户是否已微信鉴权
  const hasSignature = getAppId()
  if (hasSignature) {
    // 判断当前用户是否存在用户信息
    const hasGetUserInfo = store.getters.name
    if (hasGetUserInfo) {
      next()
    } else {
      // 如果用户信息不存在，则重新获取用户信息
      try {
        //获取用户信息
        await store.dispatch('user/getInfo')
        next()
      } catch (error) {
        // 删除token，进入登录页面重新登录
        await store.dispatch('user/resetToken')
        NProgress.done()
      }
    }
  } else {
    await store.dispatch('user/wxAuth')
    next()
    NProgress.done()
  }
})

router.afterEach(() => {
  // 完成进度条
  NProgress.done()
})
