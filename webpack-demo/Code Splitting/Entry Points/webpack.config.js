const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry : {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    plugins : [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title : 'Output Management'
        })
    ],
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname, 'dist')
    },
    optimization: {
        //npm run build 之后 index.js与another-module.js只有逻辑代码没有import部分，会增加一个vendors~another~index.bundle.js包含import部分，index.html会先引入该js
        splitChunks: {
            chunks: 'all'
        }
    }
};