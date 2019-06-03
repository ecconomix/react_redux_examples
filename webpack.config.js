const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    open: false
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
              modules: true
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
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      actionTypes: path.resolve(__dirname, 'src/constants/actionTypes'),
    }
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './public/index.html',
  })]
};