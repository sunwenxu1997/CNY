
/* 使用ES6模块引入 */
import wx from 'weixin-js-sdk';

// 初始化微信鉴权
export function initWxConfig() {
    return new Promise(async (resolve, reject) => {
        // data就是上一步说的后端返回的那些数据，包含signature、nonceStr、timestamp
        const data = await getJsSDK();
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
        });
        wx.ready(() => {
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            resolve();
        })
        wx.error((res) => {
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            reject(res);
        })
    })
}