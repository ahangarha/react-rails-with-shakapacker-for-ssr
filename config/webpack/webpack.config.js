const { webpackConfig } = require('shakapacker')


// throw "in webpack.config"
// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.

const exposeReactRailsUJS = {
  test: require.resolve('react_ujs'),
  use: [{ loader: 'expose-loader', options: { exposes: ['$', 'ReactRailsUJS'] } }],
};

webpackConfig.module.rules.push(exposeReactRailsUJS);

// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.

module.exports = webpackConfig
