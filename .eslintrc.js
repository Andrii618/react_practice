module.exports = {
  plugins: ['react'],
  extends: ['eslint:all', 'plugin:react/all', 'airbnb-base', 'plugin:prettier/recommended'],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 0,
    'no-console': 1,
    'no-alert': 1,
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'global-require': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'arrow-body-style': 1,
    'prefer-arrow-callback': 1,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-no-literals': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
