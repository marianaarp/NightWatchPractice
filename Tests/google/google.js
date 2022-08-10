module.exports = {
    'Demo test google' : function(browser) {
      browser
      .windowMaximize()
      .url('https://google.com/')
      .waitForElementVisible('body')
      .assert.elementPresent('body') 
      .end();
    }
  };