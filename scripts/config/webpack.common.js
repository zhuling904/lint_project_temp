const { resolve } = require("path");
const { isDev, PROJECT_PATH } = require("../constants");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const getCssLoaders = (importLoaders) => [
  "style-loader",
  {
    loader: "css-loader",
    options: {
      modules: false,
      sourceMap: isDev,
      importLoaders,
    },
  },
  "postcss-loader",
];

module.exports = {
  entry: {
    app: resolve(PROJECT_PATH, "./src/index.ts"),
  },
  output: {
    filename: `js/[name]${isDev ? "" : ".[hash:8]"}.js`,
    path: resolve(PROJECT_PATH, "./dist"),
    // 例如，生成的文件名将放在 images 目录，具有哈希、扩展名和查询字符串
    assetModuleFilename: "images/[hash][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(PROJECT_PATH, "./public/index.html"),
      filename: "index.html",
      cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
      minify: isDev
        ? false
        : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            useShortDoctype: true,
          },
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      "@src": resolve(PROJECT_PATH, "./src"),
      "@components": resolve(PROJECT_PATH, "./src/components"),
      "@utils": resolve(PROJECT_PATH, "./src/utils"),
    },
  },
  module: {
    rules: [
      // 处理样式
      {
        test: /\.css$/,
        use: getCssLoaders(1),
      },
      {
        test: /\.less$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: "less-loader",
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      // 处理图片、文件、字体
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        // 通用文件则使用 asset，此时会按照默认条件自动决定是否转换为 Data URI
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset",
        parser: {
          // 如果文件大小小于 8kb，那么会转换为 data URI，否则为单独文件。
          // 8kb 是默认值，你可以根据需要进行调整
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
      },
      // 处理jsx、ts、js
      {
        test: /\.(tsx?|js)$/,
        loader: "babel-loader",
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
    ],
  },
};
