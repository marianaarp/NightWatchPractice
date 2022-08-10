//Call to blog Command
module.exports = {
'test command blogMenu' : function(browser) {
    var unosquare = browser.page.mainpage();
    unosquare
    .navigate()
    .blogUnosquare()
    .waitForElementVisible("input#search-bar")
    .assert.urlContains('https://blog.unosquare.com/')
    .assert.containsText("h1","DIGITAL TRANSFORMATION BLOG")
    .verify.containsText('h1','Unicorn')
    .setValue('input#search-bar','quality')
    .pause(7000)
    .click('button.search-submit')
    .assert.containsText('h3.results-title','RESULTS FOUND')
    .assert.urlEquals('https://info.unosquare.com/blog-search?query=quality')
    .assert.cssProperty('li a[href = "#"]','color','rgba(22, 95, 251, 1)')
    .click("li a[href = 'https://www.unosquare.com/']")
    .waitForElementVisible('img.unicorn')
    

    browser.end();
}
};