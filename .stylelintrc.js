module.exports = {
  // 扩展,使用 stylelint 已经预设好的一些规则。
  extends: ["stylelint-config-standard"],
  rules: {
    "comment-empty-line-before": null,
    "declaration-empty-line-before": null,
    "function-name-case": "lower",
    "no-descending-specificity": null,
    "no-invalid-double-slash-comments": null,
    "rule-empty-line-before": "always",
  },
  ignoreFiles: ["node_modules/**/*", "build/**/*"],
};
