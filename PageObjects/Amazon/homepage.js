function getData() {
    return require('../../dataExternal/amazonData'); // Using the correct path is important
  };

module.exports = {
    url: 'https://www.amazon.com.mx/',
    //commands: [validateSearch],
    elements: {
        searchHome: {
          selector: "input#twotabsearchtextbox"
        },
        searchSubmit: {
            selector: "input#nav-search-submit-button"
        }
    },

    commands: [
        {
          //Command valid search
          searchAmazon: function() {
            this.api.pause(1000);
            const amazonData = getData();
            
            return this.waitForElementVisible('@searchHome', 1000)
              .click('@searchHome')
              .setValue('@searchHome', amazonData.search_item)
              .click('@searchSubmit')
              .moveToElement('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(3) > div > div > div > div > div.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small > div.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > h2 > a > span',0,0)
              .waitForElementVisible("#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(3) > div > div > div > div > div.s-product-image-container.aok-relative.s-image-overlay-grey.s-text-center.s-padding-left-small.s-padding-right-small.puis-spacing-small.s-height-equalized > span > a > div > img")
          }
        }
    ]
}