/* 使用ES6模块引入 */
import wx from 'weixin-js-sdk'
import { getJsSDK } from '@/api/app'

// 初始化微信鉴权
export function wxAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      const url = window.location.href
      const { data } = await getJsSDK({ url })
      wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: [
          'updateAppMessageShareData', // 分享给朋友
          'updateTimelineShareData', // 分享到朋友圈
          'onMenuShareAppMessage', // 旧版分享给朋友
          'onMenuShareTimeline', // 旧版分享到朋友圈
          'chooseImage' // 选择图片
        ]
      })
      resolve()
      wx.checkJsApi({
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareAppMessage', 'onMenuShareTimeline', 'chooseImage'],
        success: function (res) {
          console.log('checkJsApi success', res)
        }
      })
      const shareData = {
        title: '好运签',
        link: 'https://sunwenxu1997.github.io/CNY/#/',
        imgUrl: 'https://sunwenxu1997.github.io/CNY/share.jpg'
      }
      wx.ready(() => {
        console.log('微信鉴权成功')
        wx.updateAppMessageShareData(shareData)
        wx.updateTimelineShareData(shareData)
      })
      wx.error((res) => {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        console.log('微信鉴权失败')
      })
    } catch (error) {
      reject(error)
    }
  })
}
