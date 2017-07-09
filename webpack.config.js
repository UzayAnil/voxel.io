const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(''),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  module: {
    loaders: []
  }
}
