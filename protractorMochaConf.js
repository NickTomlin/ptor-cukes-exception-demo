'use strict';

exports.config = {
  framework: 'mocha',

  specs: [
    'features/mocha.test.js'
  ],

  capabilities: {
    browserName: 'chrome',
  },

  chromeDriver: require('chromedriver').path,
  directConnect: true,

  baseUrl: 'http://www.protractortest.org/',
};
