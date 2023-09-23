// const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
module.exports = defineConfig({
  projectId: "hk7cdu",
  env: {
    'username': 'Admin',
    'password': 'admin123'
  },
  e2e: {

    "specPattern": "**/*.feature",

    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    // baseUrl : 'https://127.0.0.1/index.html',
    setupNodeEvents(on, config) {
  
      return require('./cypress/plugins/index.js')(on, config)

      // implement node event listeners here
      on('task', { downloadFile })
      // allureWriter(on, config);
      return config;
    },
  },
});
