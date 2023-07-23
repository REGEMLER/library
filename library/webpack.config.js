const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
      open: true,
      port: 8080,
      static: {
        directory: path.join(__dirname, 'public'),
      },
    },
  };

module.exports = ({ development }) => ({
    mode: development ? 'development' : 'production',
    devtool: development ? 'inline-source-map' : false,
    entry : path.resolve(__dirname, 'src/index.js'),
    output : {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext]',
    }, 
    module : {
        rules: [
            {
              test: /\.(woff(2)?|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
              test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
              type: 'asset/resource',
              },
            {
              test: /\.s[ac]ss$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ],
    }, 
    plugins: [new HtmlWebpackPlugin(
        {
            template: path.resolve(__dirname, 'src/index.html'),
        }
    ),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new CopyPlugin({
        patterns: [{
          from: 'public',
          noErrorOnMissing: true,
        }],
      }),
    ],
    ...devServer(development)
})