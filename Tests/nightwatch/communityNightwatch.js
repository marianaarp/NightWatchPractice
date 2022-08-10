//Call to community
module.exports = {
    'test command blogMenu' : function(browser) {
        var nightwatch = browser.page.landingpage();
        nightwatch
        .navigate()
        .communityNightwatch()
        .waitForElementVisible("button.DocSearch")
        .assert.title('About | Nightwatch.js')
        .assert.urlEquals('https://nightwatchjs.org/about/community/')
        .assert.enabled('button.DocSearch')
        .click('button.DocSearch')
        .assert.visible('input#docsearch-input')
        .setValue('input#docsearch-input','windowSize')
        .waitForElementVisible('div.DocSearch-Hit-source')        
        
    
        browser.end();
    }
    };