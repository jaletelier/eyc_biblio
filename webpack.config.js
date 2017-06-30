const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css"
});

const path = require('path');
module.exports = {
  entry: './app/webpack-index.js',
  output: {
    path: path.resolve(__dirname, 'public/'),
    publicPath:'/',
    filename: 'webpack-index.bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        // use style-loader in development
        fallback: "style-loader"
      })
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/views/main_template.pug',
    filename: '../app/views/main.pug',
    filetype: 'pug',
    inject:false
  }),new HtmlWebpackPugPlugin(), extractSass]
};