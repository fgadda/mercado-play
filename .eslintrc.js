module.exports = {
  extends: ["next", "prettier"],
  plugins: ["unicorn"],
  rules: {
    "no-unused-vars": "error",
    "prefer-const": "error",
    "@next/next/no-img-element": "off",
  },
}
