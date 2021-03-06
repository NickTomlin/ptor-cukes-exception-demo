'use strict';

exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'features/**.feature'
  ],

  capabilities: {
    browserName: 'chrome',
  },
  chromeDriver: require('chromedriver').path,
  directConnect: true,

  baseUrl: 'http://www.protractortest.org/',

  cucumberOpts: {
      require: [
        'steps/**Steps.js'
      ],
      format: ['pretty']
    }
};
