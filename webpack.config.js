var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/app.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.node$/,
        loader: "node-loader"
      }
    ],
     noParse: /node_modules\/quill\/dist/
  },
  devtool: 'source-maps'
};
