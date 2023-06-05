/// <reference types="cypress" />
import 'cypress-file-upload';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Données facebook

Cypress.Commands.add('entete', (prenom, nom, numerOuEmail, motDePasse) => { 
    cy.get('[type="text"][ aria-label="Prénom"]').type(prenom)
    cy.get('[type="text"][ aria-label="Nom de famille"]').type(nom)
    cy.get('[type="text"][ aria-label="Numéro de mobile ou e-mail"]').type(numerOuEmail)
    cy.get('#password_step_input').type(motDePasse)
})

Cypress.Commands.add('corps',(day, month, year)=>{
    cy.get('#birthday_wrapper > .mtm').should('contain.text','Date de naissance')
    cy.get('#day').select(day)
    cy.get('#month').select(month)
    cy.get('#year').select(year)

})

Cypress.Commands.add('pied',()=>{
    cy.get(':nth-child(2) > ._58mt').click()
    cy.get('[type="submit"][name="websubmit"]').click()
   
})