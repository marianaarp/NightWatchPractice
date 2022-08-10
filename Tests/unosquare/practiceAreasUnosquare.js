//Call to practiceAreas Command
module.exports = {
'test command practiceAreas' : function(browser) {
    var unosquare = browser.page.mainpage();
    unosquare
    .navigate()
    .practiceAreasUnosquare()
    .waitForElementVisible("h2.subtitle")
    .assert.urlEquals('https://www.unosquare.com/PracticeAreas')
    .assert.attributeContains('div#tools','class','gray-section')
    .getLocationInView("div#tools h2.subtitle")
    .waitForElementVisible("h2.subtitle")
    .assert.containsText('div#tools h2.subtitle','OUR TOOLS')

    browser.end();
}
};