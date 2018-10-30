const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

module.exports = merge.smart(baseConfig, {
  target: 'electron-main',
  entry: {
    main: './src/main.ts'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'src', 'frontend')
      ],
      include: [
        path.resolve(__dirname, 'src', 'main.ts')
      ],
      loader: 'babel-loader'
    }]
  }
})
