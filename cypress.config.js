const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kvvge1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-grep/src/plugin')(config);
      return config;
    },
  reporter: 'cypress-mochawesome-reporter',
    video: false,
  reporterOptions: {
    saveHtml: true,
    reportDir: 'cypress/reports/html',
    charts: true,
    reportPageTitle: 'My Test Suite',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    },
    e2e: {
      setupNodeEvents(on, config) {
        on("task", {isFileExist, findFiles});
        require('cypress-mochawesome-reporter/plugin')(on);
      },
    },
  },
});
