const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
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
};
