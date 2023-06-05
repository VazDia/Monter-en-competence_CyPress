/// <reference types="cypress" />
describe("Travailler avec les fichiers",()=>{
    let oMesCordonnees = {"Nom":"Vazoumana","prénom":"Diarrassouba","Metier": "informaticien"}

    it("Chercher le fichier et l'ouvir", () =>{
       cy.readFile('cypress/fixtures/example.json').then((element)=>{
        expect(element).to.have.property('name','Using fixtures to represent data')
        expect(element).to.have.property('email','hello@cypress.io')
       })
    })
    it("Mettre des textes à l'intérieur d'un fichier",()=>{
        cy.writeFile('cypress/fixtures/monFichichier.json',oMesCordonnees)
        cy.readFile('cypress/fixtures/monFichichier.json').then((elt)=>{
            expect(elt).to.contain.property('Nom','Vazoumana')
        })
    })

})