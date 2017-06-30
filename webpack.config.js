var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './app/webpack-index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'webpack-index.bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    },
    {
      test: /\.pug$/,
      use: 'pug-loader'
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/views/index.pug'
  })]
};