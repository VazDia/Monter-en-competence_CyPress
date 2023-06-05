/// <reference types="cypress" />




//------------------------------------------------------------------------------------  




const xRefTest      = "TRA_IHM_GLB";

const xDescription  = "Examen de l'IHM Traduction";

const xIdTest       =  7249;

const xVersion      = 2.0;




var info = {

    desc    : xDescription,

    appli   : 'TRADUCTION',

    version : xVersion,

    refTest : [xRefTest],

    idTest  : xIdTest,

    help    : [],

    params  : [],

    fileName: __filename

};




//------------------------------------------------------------------------------------  




import Menu                 from '../../pages/TRA/menu'

import Accueil              from '../../pages/TRA/accueil.page'

import Dictionnaire         from '../../pages/TRA/dictionnaire.page'

import Admin                from '../../pages/TRA/admin.page'




//------------------------------------------------------------------------------------




describe('- Start -', () => {




    it('Info', () => {      

        cy.init(info)

    });

})





describe('[' + xRefTest + '] - ' + xDescription.toUpperCase() + ' : ', function() {




    const menu                      = new Menu()

    const pageAccueil               = new Accueil()

    const pageDictionnaire          = new Dictionnaire()

    const pageAdmin                 = new Admin()




    it ('Sigale [' + info.appli + '] - Open', () => {

        cy.openUrl()

    })




    describe('Connexion', () => {




        it('Login [USER] = "' + Cypress.env('login') + '"', () => {

            cy.login(info);

            cy.get('.error').should('not.exist');

        })

    })




//--------------------------PAGE ACCUEIL------------------------------------------------------------------//




    describe('Page [ACCUEIL] >', () => {




        var sNomPage = 'accueil';

        it('Menu [ACCUEIL] - Click', () => {

            menu.click(sNomPage)

        })




        it('Page [ACCUEIL] - Is Visible', () => {

            pageAccueil.labelWelcomeMessage().should('be.visible')

        })

    })




//--------------------------PAGE DICTIONNAIRE------------------------------------------------------------------//




    describe('Page [DICTIONNAIRE] >', () => {




        var sNomPage = 'dictionnaire';




        it('Menu [DICTIONNAIRE] - Click', () => {

            menu.click(sNomPage)

        })




        it('DataGrid [ZONE ETAT TRADUCTION ELEMENT] - Check element',() => {

            pageDictionnaire.daraGridElementEtatTraduction().then((eElement) =>{

                const aHeaders=["Type", "Code", "Traduit / Validé", "Actions", ""];

                const bDebug=false;

                cy.checkDataGrid(eElement,aHeaders,bDebug)

            })

        })




        it('DataGrid [ZONE TRADUCTION ELEMENT] - Check element',() => {

            pageDictionnaire.dataGridElementTraduction().then((eElement) =>{

                const aHeaders=["Caractéristique", "Texte de référence", "Traduction"];

                const bDebug=false;

                cy.checkDataGrid(eElement,aHeaders,bDebug)

            })

        })




        it('Button [FOOTER] - Is Visible',()=>{

            pageDictionnaire.buttonPaginationDernierePage().should('be.visible')

        })




        it('Button [FOOTER] - Check element',()=>{

            pageDictionnaire.buttonPaginationDernierePage().click()

            pageDictionnaire.buttonPaginationValeurDernierePage().should('be.visible')

        })




        it('Thead [TYPE] - Is Visible',() => {

            pageDictionnaire.theadFiltreType().click().should('be.visible')

        })




        it('Thead [CODE] - Is Visible',() => {

            pageDictionnaire.theadFiltreCode().click().should('be.visible')

        })




        it('Thead [TRADUIT/VALIDE] - Is Visible',() => {

            pageDictionnaire.theadFiltreTraduitValider().click().should('be.visible')

        })




        it('ListBox [TYPE] - Is Visible', () => {

            pageDictionnaire.dataGridListBoxTypeElement().should('be.visible')

        })




        it('InputField [TYPE] - Is Visible', () => {

            pageDictionnaire.dataGridListBoxTypeElement().click()

            pageDictionnaire.dataGridInputRechercheTypeElement().should('be.visible')

        })




        it('InputField [CODE] - Is Visible', () => {

            pageDictionnaire.dataGridInputCode().should('be.visible')

        })




        it('Button [CRITERE RECHERCHE] - Is Visible', () => {

            pageDictionnaire.dataGridButtonFiltreCritereRecherche().should('be.visible')

        })




        it('ListBox [CRITERE RECHERCHE] - Is Visible', () => {

            pageDictionnaire.dataGridButtonFiltreCritereRecherche().click()

            pageDictionnaire.dataGridListBoxCritereRecherche().should('have.length.at.least',7)

        })




        it('CheckBox [ETAT] - Is Visible', () => {

            pageDictionnaire.dataGidCheckboxEtatTraduction().should('be.visible')

        })




        it('Trdata [ELEMENT A TRADUIRE ] - Is Visible',()=> {

            pageDictionnaire.dataGridElementAtraduire().should('be.visible')

        })




        it('TableTraduction [TRADUCTION DESIGNATION] - Is Visible',() => {

            cy.intercept('/ws/caracteristiques?typeElement=*').as('getdesignation');

            pageDictionnaire.dataGridUnElementAtraduire().click()

            cy.wait("@getdesignation").then(xhr => {

                expect(xhr.response.statusCode).to.equal(200);  // Le serveur répond favorablement

            });

            pageDictionnaire.dataGridTableauTraduction().should('have.length.at.least',1)

        })




        it('InputField [TRADUCTION DESIGNATION] - Is Visible',() => {

            pageDictionnaire.dataGridInputTraduction().should('be.visible')

        })




        it('Button [SAUVEGARDER] - Is Visible', () => {

            pageDictionnaire.buttonSauvegarder().should('be.visible')

        })

    })




    //--------------------------PAGE ADMIN----------------------------------------------------------------------//




    describe('Page [ADMIN] >' ,() => {




        var sNomPage = 'admin';

        it('Menu [ADMIN] - Click', () => {

           

            //cy.intercept('/ws/admin/status').as('getadmin');

            menu.click(sNomPage)




            /*cy.wait("@getadmin").then(xhr => {

            expect(xhr.response.statusCode).to.equal(200);  // Le serveur répond favorablement

            }); */

        })




        it('Button [DESACTIVER/REACTIVER ACCES APPLICATION] - Is Visible',() => {

            menu.waitForSpinner(60000)

            pageAdmin.buttonActiverDesactiveAccesAppli().should('be.visible')

        })




        it('ListBox [CACHE] - Is Visible',() => {

            pageAdmin.listBoxSelectCache().should('be.visible')

        })




        it('ListBox [SELECT OPTION] - Is Visible',() =>{

            pageAdmin.listBoxSelectOpen().should('have.length.at.least',8)

        })




        it('Button [SUPPRIMER] - Is Visible',() => {

            pageAdmin.buttonSupprimerCache().should('be.visible')

        })




        it('Button [VOIR API AVEC SWAGGER] - Is Visible',() => {

            pageAdmin.buttonVoirApiSwagger().should('be.visible')

        })

    })




    describe('Déconnexion', () => {




        it('Logout', () => {

            menu.deconnexion()

        })

    })

})




describe('- End -', () => {




    it('Info', () => {

        cy.close();      

    })

})