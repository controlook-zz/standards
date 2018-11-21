module.exports = {
  configureWebpack: {
    devtool: 'sourcemap'
  },
  css: {
    sourceMap: true
  },
  devServer: {
    disableHostCheck: true
  },
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true
    }
  }
}
