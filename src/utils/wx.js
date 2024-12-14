/* 使用ES6模块引入 */
import wx from 'weixin-js-sdk'
import { getJsSDK } from '@/api/app'

// 初始化微信鉴权
export function initWxConfig(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await getJsSDK({ url })
      wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'chooseImage',
          'uploadImage',
          'previewImage',
          'getLocation',
          'openLocation',
          'scanQRCode',
          'chooseWXPay',
          'hideMenuItems',
          'showMenuItems'
        ]
      })
      resolve(data)
      const wxShareData = {
        title: '活动页面', // 分享标题
        desc: '活动页面---111', // 分享描述
        link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png' // 分享图标
      }
      wx.ready(() => {
        // 需在用户点击分享按钮前就先调用
        wx.updateAppMessageShareData(wxShareData)
        wx.updateTimelineShareData(wxShareData)
        wx.onMenuShareAppMessage(wxShareData)
        wx.onMenuShareTimeline(wxShareData)
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
