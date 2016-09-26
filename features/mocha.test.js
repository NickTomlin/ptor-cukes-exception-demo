'use strict';

describe('protractor and mocha', function () {
  it('should fail gracefully when opening a webpage and asserting an element is not there', function () {
    browser.get('/');
    return element(by.css('nonexistent')).getWebElement()
  })

  it('Passes', () => {
    // placeholder
  })
})
