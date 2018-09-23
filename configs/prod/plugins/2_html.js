//====================================================|
// WEBPACK PROD PLUGINS: HTML


//--------------------------| Import

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { title, homepage, description} = require('../../../package.json');


//--------------------------| Configuration

const plugin = new HtmlWebpackPlugin({
  hash: true,
  template: './client/src/markup/index.html',
  minify: {
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    collapseWhitespace: true,
    preserveLineBreaks: false
  },
  cover: `${homepage}/images/logo.png`,
  title,
  homepage,
  description
});


//--------------------------| Export

module.exports = plugin;
