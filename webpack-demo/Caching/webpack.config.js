const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins : [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title : 'Caching'
        }),
        new HashedModuleIdsPlugin()
    ],
    output : {
        filename: '[name].[contenthash].js',
        path : path.resolve(__dirname, 'dist')
    },
   optimization: {
     runtimeChunk: 'single',
     splitChunks: {
       cacheGroups: {
         vendor: {
           test: /[\\/]node_modules[\\/]/,
           name: 'vendors',
           chunks: 'all'
         }
       }
     }
   }
};