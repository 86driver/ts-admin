const path = require('path')
const name = 'vue+ts test'

module.exports = {
  publicPath: '/',
  lintOnSave: process.env.NODE_ENV === 'development',

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false
  },

  chainWebpack(config) {
    config.set('name', name)
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    }
  }
}
