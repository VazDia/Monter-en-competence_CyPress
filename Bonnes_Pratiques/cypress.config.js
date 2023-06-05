const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
      // implement node event listeners here
      specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
      testIsolation: false,
  },
  env: {
    baseUrl:'https://app-releve-admin-hors-prod.azurewebsites.net/#/home',
    identifiant: 'lunettes',
    motDePasse: 'glasses',
}
});
