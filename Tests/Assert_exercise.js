  module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://nightwatchjs.org/')
      .waitForElementVisible('body')
      .assert.elementPresent('body')
      .click('#navigation > ul > li:nth-child(3) > a')
      .verify.visible('#assertions')
      .pause(5000)
      .click('#docsearch > button > span.DocSearch-Button-Container > span')
      .sendKeys('#docsearch-input', 'assertion selected')
      .waitForElementVisible('#docsearch-item-0 > a > div > div.DocSearch-Hit-content-wrapper > span.DocSearch-Hit-path')
      .click('#docsearch-item-0 > a > div > div.DocSearch-Hit-content-wrapper > span.DocSearch-Hit-path')
      .waitForElementVisible('#api-container > div.background > div > div > div.col-md-3 > div > ul > li:nth-child(4) > button > a')
      .verify.visible('#api-container > div.background > div > div > div.col-md-3 > div > ul > li:nth-child(4) > button > a')
      .assert.attributeContains('#navbartop > ul > li:nth-child(5) > a', 'href', 'https://nightwatchjs.org/blog/')
      .click('#navbartop > ul > li:nth-child(5) > a')
      .assert.urlContains('https://nightwatchjs.org/blog/')
      .execute('window.scrollTo(0,document.body.scrollHeight);')
      .assert.containsText("body > footer > div > div:nth-child(1) > div.col-md-6 > div > div > p", "Nightwatch.js was created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained by all these fine people with help from all our contributors.")
      .pause(5000)
      .end();
    }
  };
//<a href="/api/">API Reference</a>
// #navigation > ul > li:nth-child(3) > a
