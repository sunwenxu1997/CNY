const target = 'http://10.10.2.93:9090'; // dev 开发

const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
//所有配置项说明都可以在 https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
  assetsDir: 'static',
  productionSourceMap: false,
  publicPath: '/CNY/',
  css: {
    extract: false
  },
  devServer: {
    proxy: {
      // '/opple/': {
      //   target,
      //   secure: false,
      //   changeOrigin: true
      // },
      // 图片
      '/file/': {
        target,
        secure: false,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
};
