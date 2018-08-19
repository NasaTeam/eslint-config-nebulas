'use strict'

module.exports = {
  parserOptions: {
    parser: 'espree',
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  plugins: ['nebulas'],
  env: {
    es6: true,
    node: true,
    'nebulas/nvm': true
  },
  rules: {
    'nebulas/export': 'error',
    'nebulas/export-contract': 'error',
    'no-undef': 'error'
  }
}
