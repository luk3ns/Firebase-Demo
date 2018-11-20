var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],
    module: {
        rules: [
            {
              test: /\.html$/,
              exclude: /node_modules/,
              use: {loader: 'html-loader'}
            }
        ]
      }
};