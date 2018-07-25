// =========================| Webpack Config: Dev |========================= //



//--------------------------| Import

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const pkg = require('../../package.json');


//--------------------------| Body

const config = {
  mode: 'development',
  entry: [
    `webpack-dev-server/client?http://localhost:${pkg.ports.dev}`,
    `webpack/hot/only-dev-server`,
    `./client/src/index.js`
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings,
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              // modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './node_modules/compass-mixins/lib/_compass.scss',
                './client/src/styles/resources/data/registries/core/**/*.scss',
                './client/src/styles/resources/data/registries/items/**/*.scss',
                './client/src/styles/resources/functions/**/*.scss',
                './client/src/styles/resources/data/roles/**/*.scss',
                './client/src/styles/resources/mixins/**/*.scss'
              ]
            },
          }
        ]
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader'
        }
      },
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        options: {
          plugins: ['react-hot-loader/babel']
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/markup.html',
      title: pkg.title,
      cover: `${pkg.homepage}/images/logo.png`,
      homepage: pkg.homepage,
      description: pkg.description,
    }),
    new StyleLintPlugin({
      files: ['./client/src/**/*.scss'],
      syntax: 'scss',
      configFile: '.stylelintrc'
    }),
    new FaviconsWebpackPlugin({
      // Your source logo
      logo: './client/src/images/logo.png',
      // The prefix for all image files (might be a folder or a name)
      prefix: 'icons-[hash]/',
      // Emit all stats of the generated icons
      emitStats: false,
      // The name of the json containing all favicon information
      statsFilename: 'iconstats-[hash].json',
      // Generate a cache file with control hashes and
      // don't rebuild the favicons until those hashes change
      persistentCache: false,
      // Inject the html into the html-webpack-plugin
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: '#fff',
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: pkg.title
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devtool: 'cheap-module-eval-source-map'
};


//--------------------------| Export

module.exports = config;
