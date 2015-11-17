/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './index'
  ],

  output: {
    path: __dirname + 'out',
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
      //include: path.join(__dirname, 'scripts')
    }]
  }
};