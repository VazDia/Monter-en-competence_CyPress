/// <reference types="cypress" />

/* --------------------------------- Importation Page Object Model ---------------------------------- */

import { Article }          from "../Page Object Model/Sigale/article";
import { Menu }             from "../Page Object Model/Sigale/menu";
import { Home }             from "../Page Object Model/Sigale/home";

/*--------------------------------------------------------------------------------------------------- */

/*----------------------------------------------- PARCOURS APPLICATION ------------------------------- */

describe('Application Sigale',{ viewportWidth: 1920, viewportHeight: 1080 }, () => {

    // Variables Globales

    const menu            =   new Menu;
    const article         =   new Article;
    const accueil         =   new Home;
    var   sIdentifiant    =   'Obina';
    var   sMotDePasse     =   'Ryan';
   
    // Aceder à l'application

    describe('Ouvrir application',()=>{

        it( 'Acces URL', () => {
            cy.openUrl('https://app-releve-admin-hors-prod.azurewebsites.net/#/home')
        })
    })

    // Se connecter sur l'application

    describe('Connexion (coordonnées incorrectes)', () => {

        it('Connexion-Echouée', () => {
            cy.login(sIdentifiant,sMotDePasse);
            cy.get('.text-danger').should('not.exist')
        })

    })

    describe('Connexion (Coordonnées correctes)', () => {

        it('Connexion-réussie',()=>{
            cy.login(Cypress.env('identifiant'),Cypress.env('motDePasse'));
        })

    })

    describe('Page - [Accueil] ', () =>{

        it('Selectionner Magazin', () => {
            accueil.selectionMgazin().click()
            accueil.optionMagazin().eq(3).click()
        })

        it('Accès aux articles', () => {
            var sNomPage = 'Articles'
            menu.click(sNomPage)
        })
        
    })

    describe('Page - [Articles]', () => {

        it('Selection Article',() => {
            article.selectArticle().eq(6).click()
        })
        
        it('Scroller Page en Haut', () =>{
            cy.slowScrollTo('top')
        })

        describe('Modification -[option]', () => {

            it('Cliquer bouton - [Modifier] ', () => {
                article.buttonModifier().click()
            })

            describe('Modier champs', () => {
                
                var   designation     =   'Comité AOP';
                var   instruction     =   'Instructions grand frais';
            
                it('champ - [designation]', ()=>{
                    article.inputTextDesignationPersonnalisee().invoke('val')
                    article.inputTextDesignationPersonnalisee().clear()
                    article.inputTextDesignationPersonnalisee().type(designation);
                })

                it('champ - [Instruction]', ()=>{
                    article.inputTextInstruction().invoke('val');
                    article.inputTextInstruction().clear()
                    article.inputTextInstruction().type(instruction);
                })
                
            })
            
            describe('Modifier categorie',()=>{

                it('Cliquer bouton - [categorie]',()=>{
                    article.selectCategorie().click()
                })

                it('Choisir catégorie',()=>{
                    article.selectCategorieOption().eq(4).click()
                })
                
            })

            describe('enregistrement',()=>{

                it('Visibilité bouton - [Enregistrer]',()=>{
                    article.buttonEnregistrer().should('be.visible')
                })

                it ('Cliquer button - [Enregistrer]', ()=>{
                    article.buttonEnregistrer().click()
                })

            })

        })

    })

    describe('Deconnexion utilisateur',()=>{

        it('Deconnecté',()=>{
            cy.logout()
        })
    })
  

})

/*------------------------------------------------------------------------------------------------------------------- */