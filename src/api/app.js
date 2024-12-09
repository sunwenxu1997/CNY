import request from '@/http/instance'

export function getJsSDK(data) {
    return request({
        url: '/wechat/getJsSdkConfig',
        method: 'get',
        data
    })
}