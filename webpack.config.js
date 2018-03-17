module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
       loader: 'babel-loader'
      }
    }
   ]
    // loaders: [
    //   {
    //     loader: 'babel-loader',
    //     test: /\.js$/,
    //     exclude: /node_modules/
    //   }
    // ]
  },
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
}