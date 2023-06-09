/// <reference types="cypress" />
describe("Travailler avec des listes sur le site d'exemple cypress",()=>{
    beforeEach(()=>{
        cy.visit('https://example.cypress.io')
    })
    it('Parcourir les différents pages et éléments de la barre de menu', ()=>{
        /***------------------------ Travailler avec le menu dérouland "Commands"----------------------------  **/
        //Click sur le ménu déroulant
        cy.get('.dropdown-toggle').click()
        // Parcourir les élement du ménu déroulant
        cy.get('.dropdown-menu li').each(($element) => {
            cy.wrap($element).trigger('mousemove'); // Simule le mouvement de la souris sur chaque élément du menu
            cy.wait(200); // Attend un court laps de temps pour simuler le mouvement fluide
        })
        // Vérication de la validation (Voir s'il s'agit vraiment de barre ciblée)
        cy.get('.dropdown-menu li').eq(0).should('contain.text','Querying')
        cy.get('.dropdown-menu li').eq(15).should('contain.text','Cookies')
        // defiler dans la page d'accueil
        cy.window().scrollTo('bottom',{duration:8000})
        cy.wait(1000)
        cy.window().scrollTo('top',{duration:4000})
        //Click sur le ménu déroulant
        cy.get('.dropdown-toggle').click()
        cy.wait(2000)
        /** ----------------------------'Travailler avec le menu Utilities'--------------------------- **/
        cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click()
        cy.get('h1').should('have.text','Utilities')
        // faire scroller la fenêtre à 500px
        cy.window().then(wind =>{
            wind.scrollTo({
                top:700,
                behavior:'smooth'
            })
        })
        // Scroller l'element:nth-child(5) > pre > .javascript à droite
        cy.get(':nth-child(5) > pre > .javascript').scrollTo("right",{ duration: 2000 })
        // Ensuite scroller tout àfait en bas
        cy.window().scrollTo("bottom",{duration:4000})
        cy.wait(1000)
        // Maintenant nou remontons tout à fait en haut
        cy.window().scrollTo('top',{duration:2000})
        cy.wait(2000)
        /**------------------ Travailler savec le cypress API -------------------------------------- **/
        cy.get(':nth-child(1) > :nth-child(3) > a').click()
        cy.get('h1').should('have.text','Cypress API')
        cy.window().scrollTo('bottom',{duration:3000})
        cy.wait(1000)
        cy.window().scrollTo('top',{duration:3000})
        cy.wait(1000)
        cy.go(-2);
        cy.get('h1').should('have.text','Kitchen Sink')
    })

    
       
})
