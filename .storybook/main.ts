import type { StorybookConfig } from "@storybook/react-webpack5";
const path = require("path");
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    // 添加LESS文件的规则
    config.module &&
      config.module.rules &&
      config.module.rules.push({
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                // 如果你正在使用Less的某些特定功能，如JavaScript启用等：
                javascriptEnabled: true,
              },
            },
          },
        ],
        include: path.resolve(__dirname, "../"),
      });

    // 返回配置
    return config;
  },
};
export default config;
