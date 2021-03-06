const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'app', 'app.js'),
  output: {
    path: path.join(__dirname, 'app', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'app'),
      loader: ['babel-loader?'+JSON.stringify({
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015']
      })],
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};
