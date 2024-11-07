import axios from 'axios';
import { Toast } from 'vant';

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 30000,
});

// Request interceptor
instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
instance.interceptors.response.use(
    (response) => {
        const res = response.data
        // 对于非json对象或者成功的请求，直接返回
        if (typeof res !== 'object' || res.code === 200) {
            return res;
        }
        if (res.code !== 200) {
            Toast({
                message: res.msg || 'Error',
                type: 'fail'
            });
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return res
        }
    },
    (error) => {
        console.log('err' + error) // for debug
        Toast({
            message: error.message,
            type: 'fail'
        })
        return Promise.reject(error);
    }
);

export default instance;
