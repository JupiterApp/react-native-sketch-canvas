module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'react',
  ],
  'extends': ['semistandard-react'],
  'rules': {
    'comma-dangle': ['error', 'always-multiline'],
    'semistandard-react/no-did-update-set-state': 'off',
    'semistandard-react/prop-types': ['error', { 'ignore': ['navigation'] }],
    'no-console': ['error', { 'allow': ['warn', 'error'] }],
  },
  'globals': {
    'fetch': false,
    'jasmine': true,
    '__DEV__': false,
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  'env': {
    'jest': true,
  },
};
