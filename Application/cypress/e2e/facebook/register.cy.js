/// <reference types="cypress" />
beforeEach(()=>{
    cy.visit('https://fr-fr.facebook.com/')
})
describe('Enregistrement de données facebook', ()=>{
    it('Prémière étape',()=>{
        cy.get('.fcb > a').click()
        cy.get('[data-testid="open-registration-form-button"]').click()
        cy.get('._52lr').should('contain.text','C’est rapide et facile')
        //Commande entete
        cy.entete('Obina','Okongo','0787948164','#Camelia')
        //Commande corps
        cy.corps('14','avr','1996')
        //Commande
        cy.pied()
        //cy.get('[type="text"][name="contactpoint"]').type('0787948164')
        //cy.get('.x1i10hfl > .xozqiw3').click()
        cy.get('[type="text"][id=":r0:"]').type('59719')
        cy.get(':nth-child(2) > .x1ypdohk > .xozqiw3').click()
        cy.get('.xu06os2 > .x193iq5w').should('contain.text',"Le code de confirmation saisi n’est pas valide ou a expiré. ")
        cy.get('.x1qughib > .x2lah0s > .x193iq5w > .x1i10hfl').click()
       // cy.wait(20000)
       // cy.get('.x1i10hfl > .xozqiw3').click()
    })

    
})