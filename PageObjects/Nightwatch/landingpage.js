module.exports = {
    url: 'https://nightwatchjs.org/',
    //commands: [validateCommunity],
    elements: {
        communityMenu: {
          selector: "li a[href = '/about/community/']"
        }
    },

    commands: [
        {
          //Command valid contacus
          communityNightwatch: function() {
            this.api.pause(1000);
            return this.waitForElementVisible('@communityMenu', 1000)
              .click('@communityMenu')
              
          }
        }
    ]
}