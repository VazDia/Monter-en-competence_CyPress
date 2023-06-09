/// <reference types="cypress" />
import { github } from "../Page Object Model/github/gitFunctions"
describe('Tests avec la Connexion Github',()=>{
    
    const git = new github
    let sEmail = ' '
    let sPassword = ' '

    describe('Ouverture site',()=>{
        it('Accès URL',()=>{
            cy.openUrl('https://github.com/login')
        })
    })
      
    

  describe('Connexions échouée',()=>{

        describe('Données Invalides',()=>{

            it('Email et mot de passe invalide',()=>{
                cy.gitLogin(sEmail,sPassword)
                cy.expect(git.eValidation(sEmail)).to.be.false
                cy.expect(git.pValidation(sPassword)).to.be.false
                git.errorMessage().should('contain','Incorrect username or password')
            })
    
            it('Email valid et mot de passe invalide',()=>{

                sEmail = 'vazoumana@gmail.com'
                sPassword=' '
                cy.gitLogin(sEmail,sPassword)
                cy.expect(git.eValidation(sEmail)).to.be.true
                cy.expect(git.pValidation(sPassword)).to.be.false
                git.errorMessage().should('contain','Incorrect username or password')

            })

            it('Email invalide et mot de passe valide',()=>{

                sEmail = 'vazoumana.gmail.com'
                sPassword = '#Camelia46'

                cy.gitLogin(sEmail,sPassword)
                cy.expect(git.eValidation(sEmail)).to.be.false
                cy.expect(git.pValidation(sPassword)).to.be.true
                git.errorMessage().should('contain','Incorrect username or password')
            })
        })

       describe('Données valides mais inexistantes',()=>{
        it('email et mot de passe valide',()=>{
            sEmail='vazoumana@gmail.com'
            sPassword ="ObinaRyan76"
            cy.gitLogin(sEmail,sPassword)
            cy.expect(git.eValidation(sEmail)).to.be.true
            cy.expect(git.pValidation(sPassword)).to.be.true
            git.errorMessage().should('contain','Incorrect username or password')
        })
       })
        
    })
    

    describe('Connexions réussie',()=>{

        it('Données valides et existantes',()=>{
            sEmail='vdiarrassouba1@gmail.com'
            sPassword ="#Camelia46"
            cy.gitLogin(sEmail,sPassword)
            cy.expect(git.eValidation(sEmail)).to.be.true
            cy.expect(git.pValidation(sPassword)).to.be.true
        })

    })

})