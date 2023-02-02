// Common configuration applying to client and server configuration
const { webpackConfig: baseClientWebpackConfig, merge } = require('shakapacker');

const webpack = require('webpack');

const commonOptions = {
  resolve: {
    extensions: ['.css', '.ts', '.tsx'],
  },
};

const commonWebpackConfig = () => merge({}, baseClientWebpackConfig, commonOptions);

module.exports = commonWebpackConfig;
