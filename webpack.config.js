const webpack = require('webpack');

const config = {
  target: 'node',
  context: __dirname + '/src',
  entry: {
    app: './app.js'
  },
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'babel-preset-es2015' ].map(require.resolve)
        },
      },
    ],
  },
  devServer: {
    contentBase: __dirname + '/src',
  },
  devtool: 'eval-source-map',
}

module.exports = config
