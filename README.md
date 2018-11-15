# Protractor_framework

To run the framework , clone/download the same.
Navigate to the project folder and run npm install. Protractor along with webdriver-manager should get downloaded as node modules.
Start webdriver manager with command: 
node ./node_modules/protractor/bin/webdriver-manager update
node ./node_modules/protractor/bin/webdriver-manager start
Selenium server should be up and running

In a seperate command terminal , run the following command:
node ./node_modules/protractor/bin/protractor protractor.conf.js
