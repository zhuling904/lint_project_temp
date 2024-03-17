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
    app: resolve(PROJECT_PATH, "./src/app.js"),
  },
  output: {
    filename: `js/[name]${isDev ? "" : ".[hash:8]"}.js`,
    path: resolve(PROJECT_PATH, "./dist"),
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

  module: {
    rules: [
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
    ],
  },
};
