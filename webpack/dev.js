const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  // devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  // mode: 'development',
  devServer: {
    contentBase: './dist',
    open: false,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test:/\.(s*)css$/,
        use: [
          'style-loader',
          { 
            loader: 'css-loader', 
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]_[hash:base64:5]',
              sourceMap: true,
            }
          },
          'sass-loader'
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, '../src/components/'),
      containers: path.resolve(__dirname, '../src/containers/'),
      actionTypes: path.resolve(__dirname, '../src/constants/actionTypes'),
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'React pet project',
    }),
]
};