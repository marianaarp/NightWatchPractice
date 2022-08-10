//Call to careers Command
module.exports = {
'test command careers' : function(browser) {
    var unosquare = browser.page.mainpage();
    unosquare
    .navigate()
    .contactUnosquare()
    .careersUnosquare()
    .assert.titleContains("Unosquare Careers")
    .waitForElementVisible("h1.coding")
    .assert.containsText("h1.coding",'CODING')
    .getLocationInView("h3.about-btn-main")
    .waitForElementVisible("h3.about-btn-main")
    .assert.not.cssProperty("h3.about-btn-main","text-align","left")
    .assert.cssProperty("h3.about-btn-main","font-size","48px")

    browser.end();
}
};