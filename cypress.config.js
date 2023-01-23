const { defineConfig } = require("cypress");
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 3000,
  reporter: 'mochawesome',
  env: {
    url: 'https://rahulshettyacademy.com',
  },
  projectId: "zk6hxv",
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  }
});
