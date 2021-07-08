const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".vue"],
  },
  entry: {
    app: path.join(__dirname, "main.js"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // 확장자가 vue라면
        use: "vue-loader", // vue-loader가 담당한다.
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
  },
};
