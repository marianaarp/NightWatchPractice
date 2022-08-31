//Call to blog Command
module.exports = {
    '@tags': ['blogusq'],
'test command blogMenu' : function(browser) {
    var unosquare = browser.page.mainpage();
    unosquare
    .navigate()
    .blogUnosquare()
    .waitForElementVisible("input#search-bar")
    .assert.urlContains('https://blog.unosquare.com/')
    .assert.containsText("h1","DIGITAL TRANSFORMATION BLOG")
    //.verify.containsText('h1','Unicorn')   
    .waitForElementVisible("label.tab-text","RECENT POSTS")
    .assert.containsText("label.tab-text","RECENT POSTS")
    .waitForElementVisible("label.tab-text","POPULAR POSTS")
    .assert.containsText("#side-bar-container > main > label:nth-child(4)","POPULAR POSTS")
    //.setValue('input#search-bar','quality')
    //.pause(7000)
    //.click('button.search-submit')
    //.assert.containsText('h3.results-title','RESULTS FOUND')
    //.assert.urlEquals('https://info.unosquare.com/blog-search?query=quality')
    //.assert.cssProperty('li a[href = "#"]','color','rgba(22, 95, 251, 1)')
    //.click("li a[href = 'https://www.unosquare.com/']")
    //.waitForElementVisible('img.unicorn')
    .blogSearch()
    .waitForElementVisible('#navbarSupportedContent > ul > li:nth-child(6) > a')
    .click('#navbarSupportedContent > ul > li:nth-child(6) > a')
    .moveToElement("#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(4) > div > span.name",0,0)
    .waitForElementVisible("#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(1) > div > span.name","MARIO DI VECE")
    .assert.containsText("#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(1) > div > span.name","MARIO DI VECE")
    .waitForElementVisible("#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(2) > div > span.name","GIANCARLO DI VECE")
    .assert.containsText("#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(2) > div > span.name","GIANCARLO DI VECE")
    .waitForElementVisible("#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(3) > div > span.name","EDUARDO ARIAS")
    .assert.containsText("#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(3) > div > span.name","EDUARDO ARIAS")
    .waitForElementVisible("#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(4) > div > span.name","IGNACIO MIRANDA")
    .assert.containsText("#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(4) > div > span.name","IGNACIO MIRANDA")
    .waitForElementVisible("#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(5) > div > span.name","DIEGO HUERTA")
    .assert.containsText("#about > div.gray-section > div > div.mt-5 > div > div > div:nth-child(5) > div > span.name","DIEGO HUERTA")
    
    browser.end();
}
};