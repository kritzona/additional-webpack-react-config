const webpack = require('webpack')
const path = require('path')

const WebpackBar = require('webpackbar')

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true,
    port: 8080,
  },
  plugins: [
    new WebpackBar({
      name: 'Development build',
      color: 'green',
    }),
  ],
}
