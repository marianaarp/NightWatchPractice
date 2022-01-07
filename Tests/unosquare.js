/*module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .end();
    }
  };*/

  /*module.exports = {
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
      .assert.containsText("li a[href = '/Services']", "SERVICES")
      .assert.cssProperty("li a[href = '/About']", 'display', 'block')
      .assert.not.cssProperty("li a[href = '/About']", 'font-size', '12px');
      browser.end();
    }
  }