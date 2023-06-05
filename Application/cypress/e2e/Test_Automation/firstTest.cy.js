/// <reference types="cypress" />
describe('Mon Premier Test', () =>{
        
    it('Première façon de faire', () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        // Ecrire Bonjour dans le champs et appuyer la touche entrer
        cy.get('.new-todo').type('Bonjour{enter}')
        // Ecrire encore une fois le mot Bonsoir
        cy.get('.new-todo').type('Bonsoir')
        // Attendre 5 secondes
        cy.wait(5000)
        //Selection et effacer le mot bonsoir et ecrire bonne nuit et appuyer sur la touche entrer.
        cy.get('.new-todo').type('{Selectall}{backspace} Bonne nuit{enter} ')
        // Validations
        cy.get(':nth-child(1) > .view > label').should('have.text','Bonne nuit')
        cy.get(':nth-child(2) > .view > label').should('have.text','Bonjour')
      })

    
})
