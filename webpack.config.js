const webpack = require('webpack')
const { merge } = require('webpack-merge')

const webpackGenConfig = require('./webpack/webpack.gen.config')
const webpackDevConfig = require('./webpack/webpack.dev.config')
const webpackProdConfig = require('./webpack/webpack.prod.config')

module.exports = (env) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const mode = env.development ? 'development' : 'production'

  switch (mode) {
    case 'development':
      return merge(webpackGenConfig, webpackDevConfig)
    case 'production':
      return merge(webpackGenConfig, webpackProdConfig)
    default:
      throw new Error('Не удалось загрузить конфигурацию')
  }
}
