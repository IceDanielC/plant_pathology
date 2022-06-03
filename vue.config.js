const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //代理服务器
  devServer:{
    proxy:'http://local:8000'
  }
})
