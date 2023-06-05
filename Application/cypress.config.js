const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
      // implement node event listeners here
      specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      testIsolation: false,
    },
    
});
