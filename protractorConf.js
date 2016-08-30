'use strict';

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        'features/**.feature'
    ],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--start-maximized']
        }
    },

    baseUrl: 'http://www.protractortest.org/',

    cucumberOpts: {
        require: [
            'steps/**Steps.js'
        ],
        format: ['pretty']
    }
};