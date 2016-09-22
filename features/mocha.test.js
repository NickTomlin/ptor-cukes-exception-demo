'use strict';

describe('protractor and mocha', function () {
  it('should fail gracefully when opening a webpage and asserting an element is not there', function () {
    browser.get('/');
    element(by.css('nonexistent')).getWebElement();
  })
})
