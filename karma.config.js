var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: false, //just run once by default
    frameworks: [ 'jasmine' ], //use the jasmine test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {test: /\.js$/, loader: 'babel', query: {presets: ['es2015', 'react', 'stage-0']}, exclude: /node_modules/},
          {test: /\.csv$/, loader: 'dsv-loader'},
          {test: /\.json$/, loader: 'json-loader'},
          {test: /\.css$/, loader: 'style!css'}
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};