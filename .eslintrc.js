module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['react', 'react-native', 'react-hooks', 'jest', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-unused-styles': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'linebreak-style': [2, 'unix'],
    quotes: [1, 'single', { avoidEscape: true }],
    semi: [2, 'never'],
    'no-unused-vars': 2,
    'no-undef': 2,
    'no-console': [2, { allow: ['warn', 'error'] }],
    'prefer-arrow-callback': 2
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@react-native-community',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  env: {
    es6: true,
    node: true,
    jest: true
  }
}
