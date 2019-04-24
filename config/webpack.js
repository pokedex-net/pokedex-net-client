const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');

const config = require('./');

let plugins = [
  new Dotenv({
    systemvars: true,
  }),
  new HtmlWebpackPlugin({
    hash: true,
    title: config.name,
    lang: config.defaultLang,
    noscript: config.noscript,
    brandColor: config.brandColor,
    template: './config/template.html',
  }),
  new WebappWebpackPlugin({
    logo: './public/images/logo.svg',
    prefix: 'icons/',
    favicons: {
      appName: config.name,
      appDescription: config.description,
      background: config.brandColor,
      theme_color: config.brandColor,
      appleStatusBarStyle: 'black-translucent',
      scope: '/',
      start_url: '/?utm_source=pwa',
      lang: (config.defaultLang === 'en') ? `${config.defaultLang}-US` : config.defaultLang,
      icons: {
        coast: false,
        yandex: false,
      },
    },
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins = [
    new CleanWebpackPlugin([
      'build',
    ], {
      root: `${__dirname}/../`,
    }),
    new CopyWebpackPlugin([
      { from: `${__dirname}/../public`, to: `${__dirname}/../build/public` },
    ]),
  ].concat(plugins);
}

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'scripts/[name].[hash].js',
    chunkFilename: 'scripts/[name].[hash].js',
    path: `${__dirname}/../build`,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
        ],
        use: {
          loader: 'babel-loader',
          options: { configFile: './config/babel.json' },
        },
      },
      // {
      //   test: /\.(ttf|eot|woff|woff2|png|jpeg|jpg|gif|ico)$/,
      //   exclude: [
      //     /node_modules/,
      //   ],
      //   use: {
      //     loader: 'file-loader',
      //     options: { name: './[name].[ext]' },
      //   },
      // },
    ],
  },
  plugins,
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
  },
};
