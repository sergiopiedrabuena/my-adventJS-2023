const globalConfig = require('./jest.config');

module.exports = {
  ...globalConfig,
  testMatch: ['<rootDir>/Reto#1.test.js']
};