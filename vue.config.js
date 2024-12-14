const target = 'https://f-openapi-uat-darlie.darlie.com.cn' // dev 开发

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
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
      '/dev-api': {
        target: target,
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''
        }
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
}
