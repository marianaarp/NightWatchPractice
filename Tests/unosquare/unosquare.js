  /*module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://nightwatchjs.org/')
      .waitForElementVisible('body')
      .assert.elementPresent('body') 
      .end();
    }
  };*/

  //PageObjetc
  module.exports = {
    'test pages validation' : function(browser) {
      var unosquare = browser.page.mainpage();

      unosquare
      .navigate()
      .waitForElementVisible('@contactusMenu')
      .click('@contactusMenu')
      .click('@industriesMenu')

      browser.end();
    }
  };




    
    