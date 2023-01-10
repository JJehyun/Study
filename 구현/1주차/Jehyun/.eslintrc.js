module.exports = {
  root: true,
  env: {
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-native',
    'prettier',
    'simple-import-sort',
    'import',
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-unused-vars': 0,
    'react-native/no-unused-styles': 0,
    'react-native/no-inline-styles': 0,
    semi: [2, 'always'],
    quotes: [2, 'single', {avoidEscape: true}],
    'prettier/prettier': 2,
    'no-console': 1,
    'react/prop-types': 0,
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
