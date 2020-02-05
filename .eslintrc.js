module.exports = {
  root: true,
  extends: ["airbnb"],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": 0,
    "react/jsx-one-expression-per-line": 0
  },
  globals: {
    document: "readonly"
  }
}; 