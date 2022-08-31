module.exports = {
    '@tags': ['testamazon'],
    'search in amazon' : function(browser) {
        var amazon = browser.page.homepage(); // aqui le cambie el nombre por que asi lo pusiste tu
        var price = 1;
        amazon
            .navigate()
            .searchAmazon()
            .getText('span.a-offscreen', function(result) {
                //browser.globals.price=result.value;
                //console.log(browser.globals.price);
                price = result.value;
                browser
                    .click('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(3) > div > div > div > div > div.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small > div.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > h2 > a > span')
                    .assert.containsText('#corePrice_desktop > div > table > tbody > tr:nth-child(2) > td.a-span12 > span.a-price.a-text-price.a-size-medium.apexPriceToPay > span.a-offscreen', price)
                    .click('input#add-to-cart-button')
                    .waitForElementVisible('#attachSiNoCoverage > span > input')
                    .click('#attachSiNoCoverage > span > input')
                    .waitForElementVisible('#sw-gtc > span > a')
                    .click('#sw-gtc > span > a')
                    .waitForElementVisible('#sc-subtotal-amount-buybox > span')
                    .assert.containsText('#sc-subtotal-amount-buybox > span', price);
            })
            
            .waitForElementVisible('input[value=Eliminar]')
            .click('input[value=Eliminar]')
            .assert.containsText('span.a-size-medium.a-color-base.sc-price.sc-white-space-nowrap','$0.00')
            .end();
    }
}