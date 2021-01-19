const webpack = require('webpack');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: false,
    mangleExports: false,
  },
  output: {
    filename: 'cytoscape.bundle.js'
  }
}
