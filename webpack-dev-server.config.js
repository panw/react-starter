var path = require('path')
var webpack = require('webpack')
var definePlugin = new webpack.DefinePlugin({
  __ENV__: JSON.stringify('dev')
});

module.exports = {
  entry: ["babel-polyfill", "./src/entry.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "http://localhost:8080/build/",
    filename: "bundle.js"
  },
  plugins: [definePlugin],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
          query: {
            plugins: ['transform-runtime', 'transform-object-assign'],
            presets: ['es2015', 'stage-0', 'react']
          },
          exclude: /node_modules/
      },
      {test: /\.csv$/, loader: 'dsv-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.css$/, loader: 'style-loader!css'},
      {test: /\.scss$/, loader: 'style-loader!css!sass'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},
      {test: /\.(png|jpg|otf|svg|woff|woff2)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(eot|ttf)$/, loader: 'file-loader'}
    ]
  },
  devtool: "eval",
  debug: true,
  quiet: false
}
