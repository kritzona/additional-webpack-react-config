const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].[contenthash].bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: ['babel-loader'],
        exclude: /node_modules/i,
      },
      {
        test: /\.(ts|tsx)/i,
        use: ['ts-loader'],
        exclude: /node_modules/i,
      },
      {
        test: /\.s([ac])ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /node_modules/i,
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /node_modules/i,
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              filename: '[name].[contenthash].[ext]',
              outputPath: 'images',
            },
          },
        ],
        exclude: /node_modules/i,
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              filename: '[name].[contenthash].[ext]',
              outputPath: 'fonts',
            },
          },
        ],
        exclude: /node_modules/i,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: 'Конфигурация webpack (Babel, TypeScript, SASS, SCSS)',
      inject: 'body',
    }),
    new EslintWebpackPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      exclude: 'node_modules',
    }),
  ],
}
