/// <reference types="cypress" />

/* --------------------------------- Importation Page Object Model ---------------------------------- */

import { Article }          from "../Page Object Model/Sigale/article";
import { Menu }             from "../Page Object Model/Sigale/menu";
import { Home }             from "../Page Object Model/Sigale/home";

/*--------------------------------------------------------------------------------------------------- */

/*----------------------------------------------- PARCOURS APPLICATION ------------------------------- */

const application           =       "Sigale"

describe( application ,{ viewportWidth: 1920, viewportHeight: 1080 }, () => {

    // Variables Globales

    const menu                  =       new Menu;
    const article               =       new Article;
    const accueil               =       new Home;
    var   sIdentifiant          =       'Obina';
    var   sMotDePasse           =       'Ryan';
   
    // Aceder à l'application

        it( application + ' - open', () => {
            cy.openUrl('https://app-releve-admin-hors-prod.azurewebsites.net/#/home')
        })


    // Se connecter sur l'application

    describe('Connexion[USER] ', () => {
        let sLabel = " "
        it('Login( '+ sIdentifiant+' , '+sMotDePasse +' ) - Failed', () => {
            cy.login(sIdentifiant,sMotDePasse);
        })

        it('Error Message- Is Visible',()=>{
            accueil.loginErrorMessage().should('be.visible')
        })

        it('Login( '+ Cypress.env('identifiant') +' , '+ Cypress.env('motDePasse') +' ) - Success',()=>{
            cy.login(Cypress.env('identifiant'),Cypress.env('motDePasse'));
        })
    })

    describe('Page[Accueil] >', () =>{

        it('Welcome Message - Is Visible',()=>{
          accueil.homePageWelcomeLabel().should('be.visible')
        })
        it('SelectBox[MAGASIN] - Click', () => {
            accueil.selectionMgazin().click()
        })

        it('SelectBox[MAGAZIN] - Option[CREMERIE] - Click',()=>{
            accueil.optionMagazin().eq(3).click()
        })
        
    })

    describe('Page[Articles] >', () => {

        it('Menu[ARTICLES] - Click', () => {
            var sNomPage = 'Articles'
            menu.click(sNomPage)
        })
        
        it('Groupe Article[7] - Click',() => {
            article.selectArticle().eq(6).click()
        })
        
        it('ScrollBar[TOP]', () =>{
            cy.slowScrollTo('top')
        })

        describe('Modification[GROUPE ARTICLE]', () => { 

            var   sDesignation     =   'Comité AOP';
            var   sInstruction     =   'Instructions grand frais';

            it('Button[Modifier] - Is  Visible', () => {
                article.buttonModifier().should('be.visible')
            })

            it('Button[Modifier] - Click ', () => {
                article.buttonModifier().click()
            })
        
            it('Input Field[DESIGNATION] - Type[ '+sDesignation+ ' ])' , ()=>{
                article.inputTextDesignationPersonnalisee().invoke('val')
                article.inputTextDesignationPersonnalisee().clear()
                article.inputTextDesignationPersonnalisee().type(sDesignation);
            })

            it('Input Field[INSTRUCTION] - Type[ '+sInstruction+ ' ])', ()=>{
                article.inputTextInstruction().invoke('val');
                article.inputTextInstruction().clear()
                article.inputTextInstruction().type(sInstruction);
            })

            it('SelectBox[CATEGORIE] - Click',()=>{
                article.selectCategorie().click()
            })

            it('SelectBox[CATEGORIE] - Option[] -Click',()=>{
                article.selectCategorieOption().eq(4).click()
            })

            describe('enregistrement',()=>{

                it('button[Enregistrer] - Is Visible',()=>{
                    article.buttonEnregistrer().should('be.visible')
                })

                it ('Button[Enregistrer] - Click', ()=>{
                    article.buttonEnregistrer().click()
                })

            })

        })

    })

    describe('Deconnexion',()=>{

        it('Deconnexion[USER]',()=>{
            cy.logout()
        })
    })
  

})

/*------------------------------------------------------------------------------------------------------------------- */