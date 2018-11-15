var globaldata = require('../globalData/data');
var AngularHomepage = function() {
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));
  
    this.get = function() {
      browser.get(globaldata.Data.url);
    };
  
    this.setName = function(name) {
      nameInput.sendKeys(name);
    };
  
    this.getGreetingText = function() {
      return greeting.getText();
    };
  };
  module.exports = new AngularHomepage();