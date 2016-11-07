const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const token = ['1', 'f', 'd', '2', '6', '5', '0', '1', '2', 'd', '2', 'c', '4', '5', '4', '0', '9', '0', 'b', '2', 'd', '0', 'e', '5', '3', '9', 'a', 'a', '2', 'a', '6', 'b', 'b', '5', '0', '3', '9', 'e', 'a', 'f'];

module.exports = {
  context: path.resolve('./src'),
  entry: {
    app: ['./index.js']
  },
  output: {
    path: './docs',
    filename: 'bundle-[hash].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel?presets[]=es2015&presets[]=stage-0', exclude: /node_modules/ },
      { test: /\.pug$/, loader: 'pug-html' },
      { test: /\.html$/, loader: 'html?conservativeCollapse' },
      { test: /\.less/, loader: ExtractTextPlugin.extract({ loader: 'css!less?sourceMap' }) },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ loader: 'css?sourceMap' }) },
      { test: /\.(png|jpe?g|.gif)$/, loader: 'file?name=[path][name].[ext]' },
      { test: /\.(woff2?|ttf|eot|svg)(.*)?$/, loader: 'file?name=fonts/[name].[ext]' }
    ]
  },
  plugins: [
    new CleanPlugin(['docs']),
    new ExtractTextPlugin('[name]-[hash].css'),
    // new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      API: JSON.stringify('http://localhost:3000'),
      TOKEN: JSON.stringify(token)
    })
  ]
};
