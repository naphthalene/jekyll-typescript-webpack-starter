const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.prod');

module.exports = merge.smart(common, {
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve('assets'),
    publicPath: '/jekyll-typescript-webpack-starter/assets'
  }
});
