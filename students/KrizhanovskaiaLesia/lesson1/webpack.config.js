const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./index.jsx",
  },
  devtool: "source-map",
  context: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "static", "build"),
    filename: "app.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "static", "build"),
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/env", "@babel/preset-react"],
        },
      },
    ],
  },
};
