module.exports = {
  useTabs: true,
  tabWidth: 2,
  endOfLine: "lf",
  singleQuote: true,
  trailingComma: "none",
  printWidth: 100,
  plugins: ["prettier-plugin-svelte"],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
