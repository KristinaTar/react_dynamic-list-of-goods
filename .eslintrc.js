module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // JS
    "semi": [2, "always"],
    "prefer-const": 2,
    "curly": [2, "all"],
    "no-redeclare": [2, { "builtinGlobals": true }],
    "operator-linebreak": [2, "before"],
    "no-console": 2,
    "brace-style": [2, "1tbs"],
    "no-param-reassign": [2, { "props": true }],
    "padding-line-between-statements": [
      2,
      {"blankLine": "always", "prev": "*", "next": "return"},
      {"blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
      {"blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]},
      {"blankLine": "always", "prev": "directive", "next": "*"},
      {"blankLine": "always", "prev": "block-like", "next": "*"},
    ],

    // React
    "import/prefer-default-export": 0,
    "standard/no-callback-literal": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "react/destructuring-assignment": 0,
    "jsx-a11y/label-has-for": [2, {
      "components": ["Label"],
      "required": {
        "some": ["id", "nesting"]
      },
      "allowChildren": true
    }]
  },
};