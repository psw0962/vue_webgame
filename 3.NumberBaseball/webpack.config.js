const { VueLoaderPlugin } = require("vue-loader");
const path = require("path"); // 현재경로

module.exports = {
  entry: {
    app: path.join(__dirname, "main.js"), // 스크립트들이 하나로 합쳐질 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
  },
};
