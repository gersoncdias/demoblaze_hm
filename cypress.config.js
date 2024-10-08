const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://demoblaze.com/',
    setupNodeEvents(on, config) {},
    env: {
      hideXhr: true
    }
  },
  watchForFileChanges: false
});
