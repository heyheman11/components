const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: ["./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "lib"),
    library: "component-library",
    libraryTarget: "umd",
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
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
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      react: require.resolve("../node_modules/react"),
      "react-dom": require.resolve("../node_modules/react-dom"),
    },
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      fileName: "[name].[hash].css",
    }),
  ],
};
