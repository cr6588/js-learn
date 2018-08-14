const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  //dev中是inline-source-map
  devtool: 'source-map'
});