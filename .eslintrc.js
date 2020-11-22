module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prettier/prettier": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/button-has-type": 0,
    "import/prefer-default-export": 0,
    "react/prop-types": 0,
    "react/no-array-index-key": 1,
    "react/jsx-props-no-spreading": 0,
    "no-unused-vars": 1,
    "import/extensions": 0,
    "import/no-named-as-default": 0,
    "no-empty-pattern": 0,
    "no-debugger": 1,
    "no-shadow": 1,
    "consistent-return": 0,
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};
