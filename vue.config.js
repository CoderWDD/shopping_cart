const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave: false,

  devServer: {
    proxy:{
      '/api': {
        target: 'http://202.193.53.235:8080',
        changeOrigin: true,
        ws: true,
        pathRewrite:{
          '^/api': ''
        }
      }
    }
  }
})
