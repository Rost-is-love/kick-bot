module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: [2, "double"],
    "object-curly-newline": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
  },
};
