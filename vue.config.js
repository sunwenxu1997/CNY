const { defineConfig } = require("@vue/cli-service");

const target = 'http://10.10.2.93:9090'; // dev 开发


//所有配置项说明都可以在 https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = defineConfig({
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/opple/': {
        target,
        secure: false,
        changeOrigin: true
      },
      // 图片
      '/file/': {
        target,
        secure: false,
        changeOrigin: true
      }
    }
  }
});
