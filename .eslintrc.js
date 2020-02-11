module.exports = {
  root: true,
  plugins: [
    'react',
    'react-native',
    'jest',
    'prettier',
    'eslint-plugin-react-hooks'
  ],
  rules: {
    'react-hooks/rules-of-hooks': error,
    'react-hooks/exhaustive-deps': warning,
    'react/jsx-uses-react': error,
    'react/jsx-uses-vars': error,
    'linebreak-style': [error, 'unix'],
    quotes: [warning, 'single', {avoidEscape: true}],
    semi: [error, 'never'],
    'prefer-arrow-callback': error,
    'react-native/no-inline-styles': error,
    'react-native/no-unused-styles': error,
    'no-unused-vars': error,
    'no-undef': error,
    // 'no-restricted-imports': [error, { patterns: ['../*', '../'] }],
    'no-console': [error, {allow: ['warn', 'error']}]
  },
  extends: ['plugin:prettier/recommended', '@react-native-community']
}
