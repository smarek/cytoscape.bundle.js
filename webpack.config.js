module.exports = {
  mode: 'production',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.ts', '.jsx', '.css']
  },
  optimization: {
    minimize: false,
  },
  output: {
    filename: 'cytoscape.bundle.js'
  }
}
