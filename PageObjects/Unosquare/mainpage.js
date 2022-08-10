  //Page object the main page of unosquare
  module.exports = {
    url: 'https://www.unosquare.com',
    //commands: [validateContactUs],
    elements: {
      contactusMenu: {
        selector: "li a[href = '/ContactUs']"
      },
      industriesMenu: {
        selector: "li a[href = '/Industries']"
      },
      aboutMenu: {
        selector: "li a[href = '/About']"
      },
      servicesMenu: {
        selector: "li a[href = '/Services']"
      },
      companyTextField: {
        selector: "input.hs-input[name = 'company']"
      },
      phoneTextField: {
        selector: "input.hs-input[name = 'phone']"
      },
      messageTextArea: {
        selector: "textarea.hs-input[name = 'message']"
      },
      submitBtn: {
        selector: "input[value = 'Submit']"
      },
      nameWarningMsg: {
        selector: "//div[contains(@class, 'hs_name')]//label[contains(., 'Please complete this required field.')]",
        locateStrategy: 'xpath'
      },

      careersMenu: {
          selector: "li a[href = 'https://people.unosquare.com']"
      },

      practiceAreasMenu: {
          selector: "li a[href = '/PracticeAreas']"
      },
      blogMenu: {
          selector: "li a[href = 'https://blog.unosquare.com']"          
      }
    },

    commands: [
      {
        //Command valid contacus
        contactUnosquare: function() {
          this.api.pause(1000);
          return this.waitForElementVisible('@contactusMenu', 1000)
            .click('@contactusMenu')
            .setValue('@companyTextField', 'QA CoE course')
            .setValue('@phoneTextField', '3300000000')
            .setValue('@messageTextArea', 'This is a Random Text used in a Course')
            .click('@submitBtn')
            .waitForElementVisible('@nameWarningMsg')
        }
      },
      {
        //Command valid careersUnosquare
        careersUnosquare: function() {
          this.api.pause(1000);
          return this.waitForElementVisible('@careersMenu', 1000)
            .click('@careersMenu')
                        
        }
      },
      {
        //Command valid blogMenu
        blogUnosquare: function() {
          this.api.pause(1000);
          return this.waitForElementVisible('@blogMenu', 1000)
          .click('@blogMenu')
                              
        }
      },
      {
        //Command valid practice areas
        practiceAreasUnosquare: function() {
          this.api.pause(1000);
          return this.waitForElementVisible('@practiceAreasMenu', 1000)
            .click('@practiceAreasMenu')
       }
      }
    ]
  }
