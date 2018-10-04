const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const config = require('./');

require('dotenv').config();

let plugins = [
  new HtmlWebpackPlugin({
    hash: true,
    title: config.name,
    lang: config.defaultLang,
    noscript: config.noscript,
    brandColor: config.brandColor,
    template: './config/template.html',
  }),
  new FaviconsWebpackPlugin({
    logo: './public/images/logo.svg',
    prefix: 'images/icons/[hash]/',
    background: config.theme.dark.appBar,
    title: config.shortName,
  }),
  new WebpackPwaManifest({
    name: config.name,
    short_name: config.shortName,
    icons: [
      {
        src: './public/images/logo.svg',
        sizes: [16, 32],
        type: 'image/svg+xml',
      },
    ],
    start_url: '/?utm_source=pwa',
    scope: '/',
    display: 'standalone',
    background_color: config.brandColor,
    theme_color: config.brandColor,
    ios: {
      'apple-mobile-web-app-title': config.shortName,
    },
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins = [
    new CleanWebpackPlugin([
      'build',
    ]),
    new CopyWebpackPlugin([
      { from: `${__dirname}/../public`, to: `${__dirname}/../build/public` },
    ]),
  ].concat(plugins);
}

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: './src/index.js',
  },
  output: {
    path: `${__dirname}/../build`,
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
      {
        test: /\.(ttf|eot|woff|woff2|png|jpeg|jpg|gif|ico)$/,
        exclude: [
          /node_modules/,
        ],
        use: {
          loader: 'file-loader',
          options: { name: './[name].[ext]' },
        },
      },
    ],
  },
  plugins,
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
  },
};
