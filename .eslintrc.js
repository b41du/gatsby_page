module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app', 'prettier'],
};
