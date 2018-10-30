const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.config.base')

module.exports = merge.smart(baseConfig, {
  target: 'electron-renderer',
  entry: {
    renderer: './src/frontend/index.tsx'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      include: [
        path.resolve(__dirname, 'src', 'frontend')
      ],
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Electron Starter Pack'
    })
  ]
})
