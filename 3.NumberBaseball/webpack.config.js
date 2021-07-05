const { VueLoaderPlugin } = require("vue-loader");
const path = require("path"); // ������

module.exports = {
  entry: {
    app: path.join(__dirname, "main.js"), // ��ũ��Ʈ���� �ϳ��� ������ ���� �̸�
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
