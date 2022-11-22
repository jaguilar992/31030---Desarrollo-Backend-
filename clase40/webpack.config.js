const path = require('path');
const nodeExternals = require('webpack-node-externals');
const dotenv = require("dotenv-webpack");

module.exports = {
  mode: "production",
  entry: "./server.ts",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  plugins: [
    new dotenv()
  ],
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts?/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
}