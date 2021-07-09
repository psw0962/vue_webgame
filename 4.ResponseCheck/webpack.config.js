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
        test: /\.vue$/, // 확장자가 vue라면(자바스크립트가 아닌것들을)
        use: "vue-loader", // vue-loader가 담당하여 읽을 수 있게 해준다.
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist",
  },
};
