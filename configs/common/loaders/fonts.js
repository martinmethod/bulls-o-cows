//====================================================|
// WEBPACK DEV LOADERS: IMAGES


//--------------------------| Export

module.exports = {
  test: /\.(woff|woff2)$/,
  use: [
    {
      loader: 'file-loader'
    }
  ]
};
