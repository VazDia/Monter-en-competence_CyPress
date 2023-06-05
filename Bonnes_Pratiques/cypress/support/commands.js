/// <reference types="cypress" />
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

Cypress.Commands.add('login',(identifiant, motDePasse) => {
    cy.get(':nth-child(1) > .form-control').invoke('val','');
    cy.get(':nth-child(1) > .form-control').type(identifiant);
    cy.get(':nth-child(2) > .form-control').invoke('val','');
    cy.get(':nth-child(2) > .form-control').type(motDePasse);
    cy.wait(1000);
    cy.get('.btn').click();
})

Cypress.Commands.add('logout',()=>{
    cy.get('#utilisateurDropdown > .fas').click()
    cy.get('.utilisateur-drop-down > .btn').click()
})

Cypress.Commands.add('openUrl',(url)=>{
    cy.visit(url)
})

Cypress.Commands.add('slowScrollTo', (endroit) => {
    cy.get('.p-datatable-scrollable-body').scrollTo(endroit,{duration:2000})
})

Cypress.Commands.add('openNewTab',(url)=>{
    windows.open(url, '_blank');
})

// cy.get('.p-dropdown-label')