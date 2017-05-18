var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

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
