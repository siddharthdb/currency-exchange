// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const dotenv = require('dotenv').config({
  path: path.join(__dirname, '..', '.env')
})

module.exports = {
  entry: path.join(__dirname, '..', '/src/index.tsx'),
  output: {
    path: path.join(__dirname, '..', "build"),
    filename: "index.min.js",
  },
  mode: process.env.NODE_ENV || "production",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              postcssOptions: {
                plugins: [require('postcss-preset-env')]
              }
            }
          },
          {
            loader: 'sass-loader'
          },
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        exclude: /node_modules/,
        type: 'asset/resource'
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/index.min.css'
    }),
    new ESLintPlugin({
      overrideConfigFile: path.resolve(__dirname, '../.eslintrc'),
      context: path.resolve(__dirname, '../src'),
      files: ['**/*.ts', '**/*.tsx']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', "src/index.html"),
    }),
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed,
    }),
  ],
  optimization: {
    providedExports: true,
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          format: {
            comments: false,
          }
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ]
  }
};