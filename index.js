'use strict'

const globals = require('globals')

module.exports = {
  parserOptions: {
    parser: 'espree',
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  plugins: ['nebulas'],
  env: {
    es6: true,
    'nebulas/nvm': true
  },
  globals: {
    ...globals.commonjs
  },
  rules: {
    'nebulas/export': 'error',
    'nebulas/export-contract': 'error',
    'nebulas/limited-libs': 'error',
    'nebulas/no-esm': 'error',
    'no-undef': 'error'
  }
}
