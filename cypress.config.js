const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 3000,
  reporter: 'mochawesome',
  env: {
    url: 'https://rahulshettyacademy.com',
  },
  projectId: "zk6hxv",
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await preprocessor.addCucumberProcessorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
