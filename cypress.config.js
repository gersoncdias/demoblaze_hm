const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://localhost:8000/',
    setupNodeEvents(on, config) {},
    env: {
      hideXhr: true
    }
  },
  watchForFileChanges: false
});
