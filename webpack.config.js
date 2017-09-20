var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.jsx', '.js']
  }
};
