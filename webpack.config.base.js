const path = require('path')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDev ? 'development' : 'production',
  node: {
    __dirname: false,
    __filename: false
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
