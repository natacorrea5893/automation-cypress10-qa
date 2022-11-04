const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kvvge1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-grep/src/plugin')(config);
      return config;
    },
  },
});
