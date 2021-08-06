const webpack = require('webpack');

const unminified = {
  mode: 'development',
  optimization: {
    minimize: false,
    mangleExports: false,
  },
  output: {
    filename: 'cytoscape.bundle.js'
  }
}

const minified = {
  ...unminified,
  mode: 'production',
  optimization: {
    minimize: true,
  },
  output: {
    filename: 'cytoscape.bundle.min.js'
  }
}

module.exports = [unminified, minified]
