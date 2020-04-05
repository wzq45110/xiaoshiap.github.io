module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'public',
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    host: 'localhost',
    port: '8080',
    https: false,
    hotOnly: false,
    // 前端解决跨域 反向代理
    proxy: {
      '/api': {
        target: 'http://test.tuolve.com/bawang/web/tl_api.php?s=/', // API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
