// // https://github.com/michael-ciniawsky/postcss-load-config
//
// module.exports = {
//   "plugins": {
//     // to edit target browsers: use "browserlist" field in package.json
//     "autoprefixer": { }
//   }
// }
//
const cssnano = require('cssnano')
const atImport = require('postcss-import')
const atEach = require('postcss-each')
const atVariables = require('postcss-at-rules-variables')
const atIf = require('postcss-conditionals')
const atFor = require('postcss-for')
const customProperties = require('postcss-custom-properties')
const mixins = require('postcss-mixins')
const nested = require('postcss-nested')
const simpleExtend = require('postcss-extend')
const pxToRem = require('postcss-pxtorem')
module.exports = {
  plugins: [
    atVariables({ /* atRules: ['media'] */ }),
    atEach(),
    atImport({
      plugins: [
        require('postcss-at-rules-variables')({ /* options */ }),
        require('postcss-import')
      ]
    }),
    pxToRem({
      propList: ['*', '!font-size']
    }),
    simpleExtend(),
    atFor(),
    atIf(),
    customProperties(),
    nested(),
    mixins(),
    cssnano({
      autoprefixer : {
        add      : true,
        remove   : true,
        browsers : ['last 2 versions', 'not ie <= 8', 'Android >= 4.0']
      },
      discardComments : {
        removeAll : true
      },
      discardUnused : false,
      mergeIdents   : false,
      reduceIdents  : false,
      safe          : true,
      sourcemap     : true
    })
  ]
}
