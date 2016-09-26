'use strict';

module.exports = function() {

    this.When(/^I open the webpage$/, function () {
        return browser.get('/');
    });

    this.When(/^I look for an element that isn't there$/, function () {
        element(by.css('nonexistent')).getWebElement();
        return browser.sleep(1);
    });

    this.Then(/^the scenario should fail gracefully$/, function () {
        return browser.sleep(1);
    });

    this.Then(/experience great success/, function () {
      return true
    })
};
