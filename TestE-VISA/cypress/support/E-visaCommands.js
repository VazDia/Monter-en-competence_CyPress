/// <reference types="cypress" />

Cypress.Commands.add('openUrl',(url) => {
    cy.visit(url)
})

Cypress.Commands.add('login', ( email, password) => {
    cy.get(':nth-child(1) > .p-inputtext').clear().type(email);
    cy.get(':nth-child(2) > .p-inputtext').clear().type(password)
    cy.get('.p-ripple').type('{enter}')
})