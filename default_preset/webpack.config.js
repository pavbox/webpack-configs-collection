

var path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
  // files that webpack will compile
  entry: './src/app/app.js',

  // output info
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // modules and rules for loading files
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },

  plugins: [
    // async load css files with browser engine
    new ExtractTextPlugin('styles.css'),
    // set default html template (using this file instead empty file)
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}


module.exports = config;
