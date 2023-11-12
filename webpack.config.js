const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './source/js/main.js',
  devtool: 'source-map',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build/js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: '../css/node_modules.css',
      }
    ),
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'source/index.html'),
        filename: '../index.html',
        inject: true,
      }
    ),
  ],
};
