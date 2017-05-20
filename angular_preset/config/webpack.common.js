var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

const extractCSS = new ExtractTextPlugin('stylesheets/[name]-css.css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-less.css');

module.exports = {
    entry: {
      'polyfills': './src/app/polyfills.ts',
      'app': './src/app/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js', '.xlf']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: [ 'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular-router-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract([ 'css-loader' ])
            },
            {
                test: /\.less$/,
                loader: extractLESS.extract([ 'css-loader', 'less-loader' ])
            },

            {
                test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
                loader: 'url-loader?limit=10000&name=[name].[ext]'
            },
            {
                test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
                loader: 'file-loader?name=[name].[ext]'
            },
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'polyfills']
        }),

        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './index_default.html'
        }),
        extractCSS,
        extractLESS
    ]
};
