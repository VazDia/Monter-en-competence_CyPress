const {defineConfig} = require('cypress')
module.exports = defineConfig({
    env: {
        baseUrl:'https://app-releve-admin-hors-prod.azurewebsites.net/#/home',
        identifiant: 'lunettes',
        motDePasse: 'glasses',
    }
})