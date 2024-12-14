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
        if (res.statusCode !== '100010') {
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
            message: error.msg,
            type: 'fail'
        })
        return Promise.reject(error);
    }
);

export default instance;
