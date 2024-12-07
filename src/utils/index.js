
import JSEncrypt from 'jsencrypt';

// 前端jsencrypt加密
export function toJsencrypt(data) {
    const publicKey =
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDcWjM9wKBXAzjExvtkTLJa9X70z8PZNmD+t/2hgJvOHgiRyo5YbXQ1iDD9IET6tCH7WCx4rOYLRuMa5MUoBiPeYFmPtqknyH1b79l8942lzmuGISd13XqTc4vXAKYVaH4FpRCJTKjy2hPCgh09Dag/2RYjhdf7tQJvJBVmwh2kwIDAQAB'
    const encrypt = new JSEncrypt()
    encrypt.setPublicKey(publicKey)
    return encrypt.encrypt(JSON.stringify(data))
}
// 获取一个随机数
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}