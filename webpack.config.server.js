var path = require('path');

module.exports = {
  entry: './server/server.js',
  output: {
    path: __dirname,
    filename: './dist/server.js'
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
          loaders: [
              'null-loader'
          ]
      }
    ]
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
}