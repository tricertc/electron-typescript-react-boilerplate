const path = require('path')
const merge = require('webpack-merge')
const spawn = require('child_process').spawn
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
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          plugins: [
            'react-hot-loader/babel'
          ]
        }
      }
    }]
  },
  devServer: {
    port: 3000,
    hot: true,
    contentBase: './dist',
    before() {
      spawn('npm', ['run', 'start-dev-main'], {
          shell: true,
          env: process.env,
          stdio: 'inherit'
        })
        .on('close', code => process.exit(code))
        .on('error', spawnError => console.log(spawnError))
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Electron Starter Pack'
    })
  ]
})
