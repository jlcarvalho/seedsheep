module.exports = {
  root: true,
  extends: ["airbnb"],
  plugins: ["jest"],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/media-has-caption": 0
  },
  globals: {
    document: "readonly"
  },
  env: {
    "browser": true,
    "jest/globals": true
  }
}; 