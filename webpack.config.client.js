var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: __dirname,
    filename: './dist/client.js'
  },
  resolve: {
      modules: [
          path.join(__dirname, "app"),
          'node_modules',
          './app'
      ],
      extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'latest', 'stage-2']
        }
      }, {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap')
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin({
          filename: 'dist/styles/main.css',
          allChunks: true
      })
  ],
  devtool: 'source-map'
}

