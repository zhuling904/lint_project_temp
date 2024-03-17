const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],
  settings: {
    "react": {
      "version": "detect" // 自动检测 React 版本
    },
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
      typescript: {},
    },
  },
  overrides: [
    // 检测ts和tsx，注意files要包括文件，否则会报错
    {
      files: ["./src/**/*.ts", "./src/**/*..tsx"],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json" // 指定 TypeScript 配置文件
      },
    },
    // 不检测js文件的类型
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.js'],
    },
  ],
  plugins: ["react"],
  rules: {
    // 对象的最后一个可以增加【,】
    "@typescript-eslint/comma-dangle": OFF,
    // 单引号关闭
    "@typescript-eslint/quotes": OFF,
    // 需要分号
    "@typescript-eslint/semi": OFF,
    // 不允许使用var
    "no-var": ERROR,
    // 函数不需要ts标注返回类型
    "@typescript-eslint/explicit-function-return-type": OFF,
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "**/*.js",
  ],
};
