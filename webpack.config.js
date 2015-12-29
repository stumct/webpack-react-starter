var path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  context: __dirname,
  entry: {
    javascript: PATHS.src + '/main.js',
    html: PATHS.src + '/index.html',
  },
  output: {
    filename: 'bundle.js',
    path: PATHS.dist,
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['eslint'],
      include: PATHS.src
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }, {
      test: /\.html$/,
      loader: 'file?name=[name].[ext]',
      include: PATHS.src
    }],
  }
}
