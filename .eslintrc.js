module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'settings': {
    'react': {
      'version': '17.0.2',
    },
  },
  'rules': {
    'linebreak-style': 0,
    'indent': 'off',
    'object-curly-spacing': ['error', 'always'],
  },
};
