/*module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .end();
    }
  };

  module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .verify.visible('xxxx')
      .url('https://www.google.com')
      .assert.visible('.non_existing')
      .url('https://www.amazon.com')
      .end();
    }
  };*/

  module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .assert.attributeContains("li a[href = '/Services']", 'class', 'nav')
      .assert.attributeEquals("li a[href = '/Services']", 'class', 'nav-link')
      .waitForElementVisible("li a[href = '/Services']")
      .assert.containsText("li a[href = '/Services']", "SERVICES"); //This is case Sensitive
      browser.end();
    }
  }