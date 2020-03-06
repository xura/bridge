const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => ({
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    filename: "mf.js",
    libraryTarget: 'umd',
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
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
  devServer: {
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    disableHostCheck: true
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  externals: ["single-spa"]
});