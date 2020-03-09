const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
import * as path from 'path';

module.exports = {
  entry: path.resolve(__dirname, "src/index.ts"),
  cache: false,
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false
  },
  output: {
    publicPath: "http://localhost:3001/"
  },
  resolve: {
    extensions: [".jsx", ".js", ".json", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-typescript']
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mf",
      library: { type: "var", name: "mf" },
      filename: "mf.js",
      remotes: {
        madrox: "madrox",
        saturn: "saturn"
      },
      shared: ["single-spa-react"]
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};