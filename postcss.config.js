//====================================================|
// POSTCSS CONFIGURATION


//--------------------------| Define paths

const data = `./client/src/styles/data`;
const swatch = `${data}/swatches`;
const role = `${data}/roles`;

const cssVariables = [
  `${swatch}/core/swatches_colors.css`,
  `${swatch}/core/swatches_offsets.css`,
  `${swatch}/core/swatches_proportions.css`,
  `${swatch}/core/swatches_screens.css`,
  `${swatch}/core/swatches_transitions.css`,
  `${swatch}/core/swatches_typography.css`,
  `${swatch}/items/swatches_backgrounds.css`,
  `${swatch}/items/swatches_borders.css`,
  `${swatch}/items/swatches_shadows.css`,
  `${role}/roles_buttons.css`,
  `${role}/roles_colors.css`,
  `${role}/roles_offsets.css`,
  `${role}/roles_shadows.css`,
  `${role}/roles_transitions.css`,
  `${role}/roles_typography.css`
];


//--------------------------| Define plugins

const plugins = [
  // transform @import rules by inlining content
  require('postcss-import'),

  // convert modern CSS into something most browsers can understand
  require('postcss-preset-env')({
    stage: 0,
    importFrom: cssVariables,
    features: {
      'color-mod-function': {
        importFrom: cssVariables
      }
    }
  }),

  // generates all of your @font-face rules (THIS HAS TO BE SET BEFORE CSSNANO DUE TO A BUG)
  require('postcss-font-magician')({
    formats: [
      'woff2',
      'woff'
    ],
    protocol: 'https:' // set if Google Fonts only used
  }),

  // convert pixel units to rem (root em) units
  require('postcss-pxtorem')({
    rootValue: 10,
    unitPrecision: 2,
    selectorBlackList: ['html']
  }),

  // create smooth linear-gradients that approximate easing functions
  require('postcss-easing-gradients'),

  // this project tries to fix all of flexbug's issues
  // https://github.com/philipwalton/flexbugs
  require('postcss-flexbugs-fixes'),

  // most commonly used mixins, shortcuts and helpers
  require('postcss-utilities'),

  // pack same CSS media query rules into one
  require('css-mqpacker'),

  // discard comments in your CSS files with PostCSS
  require('postcss-discard-comments')({
    removeAll: true
  })
];


//--------------------------| Define config

const config = {
  plugins
};


//--------------------------| Export

module.exports = config;
