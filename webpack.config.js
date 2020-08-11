const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: process.env.NODE_ENV === "development" },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /.(jpg|jpeg|png|gif)$/,
        use: ["url-loader"],
      },
      {
        test: /\.svg$/,
        use: [{ loader: "@svgr/webpack", options: { dimensions: false } }],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      fileName: "[name].[hash].css",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
};
