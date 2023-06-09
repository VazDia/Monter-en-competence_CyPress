/// <reference types="cypress" />

Cypress.Commands.add('gitLogin',(email,password)=>{
    cy.get('#login_field').invoke('val','');
    cy.get('#login_field').type(email)
    cy.get('#password').invoke('val','')
    cy.get('#password').type(password)
    cy.get('.btn').click()
})

