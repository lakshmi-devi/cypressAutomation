const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");

module.exports = defineConfig({
 "screenshotsFolder": "cypress\\reports\\mochareports\\assets",
  projectId: 'e37cvv',
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
   "reporterEnabled":"mochawesome",
   "mochawesomeReporterOptions":{
    "reportDir": "cypress/reports/mocha",
    "quite":true,
    "overwrite":false,
    "html":false,
    "json":true
   }
  },
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    watchForFileChanges:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://stage.manufacton.com",
  },
});
