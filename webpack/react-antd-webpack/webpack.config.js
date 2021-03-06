const path = require("path");
// const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, "./src/main.js"),
  output: {
    path: path.join(__dirname, "./"),
    filename: "bundle.js",
  },
  // plugins: [
  //     new htmlWebpackPlugin({ //创建一个在内存中生成html页面的插件
  //         template: path.join(__dirname, './src/index.html'), //指定模版页面，将来会根据指定的页面路径，去生成内存中的页面
  //         filename: 'index.html'
  //     })
  // ],
  module: {
    //这个节点，用来配置所有第三方模块加载器
    rules: [
      //配置第三方模块的匹配规则
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader", 
            options: {
              lessOptions: {
                modifyVars: {
                  "primary-color": "#0aa679",
                  "link-color": "#1DA57A",
                  "border-radius-base": "10px",
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(jpg|jepg|png|gif)$/,
        use: "url-loader?limit=1000&name=[hash:8]-[name].[ext]",
      }, //URL图片路径的匹配规则
      { test: /\.(eot|svg|woff|woff2|ttf)$/, use: "url-loader" }, //字体图标的匹配规则
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
};
