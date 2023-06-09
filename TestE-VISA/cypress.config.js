const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      testIsolation: false,
      viewportWidth:1920,
      viewportHeight:1080
  },
  
  env: {
    baseUrl:'http://localhost:4200/',
  }
});
