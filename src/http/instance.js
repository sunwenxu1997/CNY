import axios from 'axios';
import { Toast } from 'vant';

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 30000,
    hiddenError: false // 隐藏错误提示
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
        const { hiddenError } = response.config;
        const res = response.data
        if (res.statusCode !== '100010') {
            if (!hiddenError) Toast(res.msg || 'Error');
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return res
        }
    },
    (error) => {
        console.log('err' + error) // for debug
        Toast({
            message: error.msg,
            type: 'fail'
        })
        return Promise.reject(error);
    }
);

export default instance;
