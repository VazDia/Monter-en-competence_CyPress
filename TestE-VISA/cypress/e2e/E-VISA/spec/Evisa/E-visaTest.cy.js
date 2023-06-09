/// <reference types="cypress" />

import { LoginPage }                from "../../Pages/login";
import { Accueil }                  from "../../Pages/accueill";
import { Register }                 from "../../Pages/register";
import { Validators }               from "../../Validation/Validators";

var info_appli  =   'E-visa TP'; 

describe(info_appli , () => {

    const   loginPage        =      new LoginPage;
    const   accueil          =      new Accueil;
    const   register         =      new Register;
    const   validators       =      new Validators;

    it(info_appli + ' - open',() => {
        cy.openUrl(Cypress.env('baseUrl'))
    })
   
    describe("Page[ACCUEIL] >" ,() => {

        it('Page[ACCUEIL] - Is Visible',()=>{
            accueil.labelRepubliqueDeCoteDIvoire().should('be.visible')
        })

        it('Button[CREER UN COMPTE] - Is Visible',()=>{
            accueil.buttonCreerUnCompte().should('be.visible')
        })

        it('Button[SE CONNECTER] - Is Visible', ()=>{
            accueil.buttonSeConnecter().should('be.visible')
        })

        it('Button[FAIRE UNE DEMANDE] - Is Visible',()=>{
            accueil.buttonFaireUneDemande().should('be.visible')
        })
        
    })
/** ----------------------------------------------------------------------------------------------------------------------------- */
    describe("Page[REGISTER] >", () => {

        let sNom        =   '';
        let sPrenom     =   '';
        let sEmail      =   '';
        let sPassword   =   '';
        let sConfirm    =   '';

        it('Button[CREER UN COMPTE] - Click',()=>{
            accueil.buttonCreerUnCompte().click()
        })

        it("Page[REGISTER] - Is Visible", () => {
            register.labelEnregistrement().should('be.visible')
        })

        it('Form [INSCRIPTION] - Is Visible', ()=>{
            register.formInscription().should('be.visible')
        })

        describe('Form[INSCRIPTION] - Validations',() => {

            describe('Input Field[NOM] - Focus - Blur', () => {

                sNom            = '233AZER'
                let sLabel      = 'Le nom est requis'

                it("Label \" "+ sLabel +" \" - Is Visible", () => {
                    register.inpuTextNom().focus();
                    register.inpuTextNom().blur()
                    register.inpuTextNomErrorMessage().should('have.text',sLabel)
                })

            }) 

            describe('Input Field[NOM] - Type[ ' + sNom + ' ] - Blur',()=>{
                let sLabel = "le nom n'est pas valide"
                it("Label \" " + sLabel + "\" - Is Visible", () => {
                    register.inpuTextNom().type(sNom);
                    register.inpuTextNom().blur()
                    cy.expect(validators.textValidator(sNom))
                    register.inpuTextNomErrorMessage().should('have.text',sLabel)
                    
                })
            })

            /**------------------------------------------------------------------------- */

            describe('Input Field[ PRENOM ] - Focus - Blur',() => {
                let sLabel = 'Le prenom est requis'
                it('Label \" '+ sLabel +'\" - Is Visible', () => {
                    register.inputTextPrenom().focus()
                    register.inputTextPrenom().blur()
                    register.inputTextPrenomErrorMessage().should('have.text',sLabel)
                })
            })

            sPrenom  =  '___BAZ';
            describe('Input Field[PRENOM] - Type[ '+ sPrenom + ' ] - Blur ', ()=>{
                 let sLabel = "le prenom n'est pas valide"
                it('Label \"'+ sLabel + ' \"', () => {
                    register.inputTextPrenom().type(sPrenom);
                    register.inputTextPrenom().blur()
                    cy.expect(validators.textValidator(sPrenom))
                    register.inputTextPrenomErrorMessage().should('have.text',sLabel)
                    
                })
            })

            /** ------------------------------------------------------------------------ */

            describe('Input Field[ ADRESSE E-MAIL ] - Focus - Blur',() => {
              let sLabel = "L'e-mail est requis"
                it('Label \" '+sLabel + ' \" - Is Visible', () => {
                    register.inputTextEmail().focus()
                    register.inputTextEmail().blur()
                    register.inputTextEmailErrorMessage().should('contain.text',sLabel)
                })     
            })

            sEmail = 'vazoumana'
            describe('Input Field[ ADRESSE E-MAIL ] - Type[ '+sEmail+ ' ] - Blur', ()=>{
                let sLabel = "L'e-mail n'est pas valide"
                it('Label \" ' + sLabel + ' \" - Is Visible', () => {
                    register.inputTextEmail().type(sEmail);
                    register.inputTextEmail().blur()
                    cy.expect(validators.emailValidator(sEmail))
                    register.inputTextEmailErrorMessage().should('contain.text',sLabel)
                }) 
            })
             /**---------------------------------------------------------------------------- */

            describe('Input Field[ MOT DE PASSE ] - Focus - Blur',() => {
    
                let sLabel = 'Le mot de passe est requis.'
                it('Label \" '+sLabel+ ' \" -Is Visible', () => {
                    register.inputTextPassword().focus()
                    register.inputTextPassword().blur()
                    register.inputTextPasswordErrorMessage().should('have.text',sLabel)
                })
                
                describe('Input Field[ MOT DE PASSE ] - Validation',() =>{
                    sPassword = "ZZZZR"
                    describe("Input Field[ MOT DE PASSE ] - Type[ "+sPassword+" ] - Blur",()=>{
                        let sLabel = "Le mot de passe doit contenir au moins 8 caractères."
                        it('Label \" '+sLabel+ ' \" - Is Visible',() => {
                            register.inputTextPassword().clear()
                            register.inputTextPassword().type(sPassword);
                            register.inputTextPassword().blur()
                            cy.expect(validators.passwordValidator(sPassword))
                            register.inputTextPasswordErrorMessage().should('contain.text',sLabel)
                        })
                    })

                    let sPassword2 ="ZZZZRRRR"
                    describe('Input Field[ MOT DE PASSE ] - Type[ '+ sPassword2 +' ] - Blur',()=>{
                        let sLabel = "Le mot de passe doit contenir au moins une lettre minuscule."
                        it('Label \" '+ sLabel + ' \" - Is Visible',() => {
                            register.inputTextPassword().clear()
                            register.inputTextPassword().type(sPassword2);
                            register.inputTextPassword().blur()
                            cy.expect(validators.passwordValidator(sPassword2))
                            register.inputTextPasswordErrorMessage().should('contain.text',sLabel)
                        })
                    })

                    let sPassword3 = 'aaaaeeee'
                    describe ('Input Field[ MOT DE PASSE ] - Type[ '+sPassword3+' ] - Blur', ()=>{
                        let sLabel = "Le mot de passe doit contenir au moins une lettre majuscule."
                        it('Label \" '+ sLabel + ' \" - Is Visible',() => {
                            register.inputTextPassword().clear()
                            register.inputTextPassword().type(sPassword3);
                            register.inputTextPassword().blur()
                            cy.expect(validators.passwordValidator(sPassword3))
                            register.inputTextPasswordErrorMessage().should('contain.text',sLabel)
                        })
                    })

                    let sPassword4 = 'aaaaZZZZ'
                    describe('Input Field[ MOT DE PASSE ] - Type[ '+sPassword4+' ] - Blur', ()=>{
                        let sLabel = "Le mot de passe doit contenir au moins un chiffre."
                        it('Label \" '+ sLabel + ' \" - Is Visible',() => {
                            register.inputTextPassword().clear()
                            register.inputTextPassword().type(sPassword4);
                            register.inputTextPassword().blur()
                            cy.expect(validators.passwordValidator(sPassword4))
                            register.inputTextPasswordErrorMessage().should('contain.text',sLabel)
                        })
                    })
                })   
                
            })

            /**---------------------------------------------------------------------------- */
            
            describe('Input Field[CONFIRMATION MOT DE PASSE ] - Focus - Blur',() => {
    
                let sLabel = 'Le mot de passe est requis.'
                it('Label \" '+sLabel+ ' \" -Is Visible', () => {
                    register.inputTextPasswordConfirm().focus()
                    register.inputTextPasswordConfirm().blur()
                    register.inputTextPasswordConfirmErrorMessage().should('have.text',sLabel)
                })
                
                describe('Input Field[CONFIRMATION MOT DE PASSE ] - Validation',() =>{
                    sConfirm = "ZZZZR"
                    describe("Input Field[ MOT DE PASSE ] - Type[ "+sConfirm+" ] - Blur",()=>{
                        let sLabel = "Le mot de passe doit contenir au moins 8 caractères."
                        it('Label \" '+sLabel+ ' \" - Is Visible',() => {
                            register.inputTextPasswordConfirm().clear()
                            register.inputTextPasswordConfirm().type(sConfirm);
                            register.inputTextPasswordConfirm().blur()
                            cy.expect(validators.passwordValidator(sConfirm))
                            register.inputTextPasswordConfirmErrorMessage().should('contain.text',sLabel)
                        })
                    })

                    let sConfirm2 ="ZZZZRRRR"
                    describe('Input Field[CONFIRMATION MOT DE PASSE ] - Type[ '+ sConfirm2+' ] - Blur',()=>{
                        let sLabel = "Le mot de passe doit contenir au moins une lettre minuscule."
                        it('Label \" '+ sLabel + ' \" - Is Visible',() => {
                            register.inputTextPasswordConfirm().clear()
                            register.inputTextPasswordConfirm().type(sConfirm2);
                            register.inputTextPasswordConfirm().blur()
                            cy.expect(validators.passwordValidator(sConfirm2))
                            register.inputTextPasswordConfirmErrorMessage().should('contain.text',sLabel)
                        })
                    })

                    let sConfirm3 = 'aaaaaaaaeeee'
                    describe ('Input Field[CONFIRMATION MOT DE PASSE ] - Type[ '+sConfirm+' ] - Blur', ()=>{
                        let sLabel = "Le mot de passe doit contenir au moins une lettre majuscule."
                        it('Label \" '+ sLabel + ' \" - Is Visible',() => {
                            register.inputTextPasswordConfirm().clear()
                            register.inputTextPasswordConfirm().type(sConfirm3);
                            register.inputTextPasswordConfirm().blur()
                            cy.expect(validators.passwordValidator(sConfirm3))
                            register.inputTextPasswordConfirmErrorMessage().should('contain.text',sLabel)
                        })
                    })

                    let sConfirm4 = 'aaaaaaaaZZZZZZ'
                    describe('Input Field[CONFIRMATION MOT DE PASSE ] - Type[ '+sConfirm4+' ] - Blur', ()=>{
                        let sLabel = "Le mot de passe doit contenir au moins un chiffre."
                        it('Label \" '+ sLabel + ' \" - Is Visible',() => {
                            register.inputTextPasswordConfirm().clear()
                            register.inputTextPasswordConfirm().type(sConfirm4);
                            register.inputTextPasswordConfirm().blur()
                            cy.expect(validators.passwordValidator(sConfirm4))
                            register.inputTextPasswordConfirmErrorMessage().should('contain.text',sLabel)
                        })
                    })
                })   
                
            })
        })

        /**-------------------------------------------------------------------------------------------------------------------- */
        describe('Enregistrement[USER]', () => {
            
            it('Enregistrement[USER] - Invalide',() =>{

                sNom             =      'Fiacre'
                sPrenom          =      'Armel'
                sEmail           =      'armelgmail.com'
                sPassword        =      'Fiacre'
                sConfirm         =      'Fiacre46'
                let sLabel       =       "Au moins l'un des champs est invalide sinon plusieurs"
                register.inpuTextNom().clear()
                register.inpuTextNom().type(sNom)
                
                register.inputTextPrenom().clear()
                register.inputTextPrenom().type(sPrenom)

                register.inputTextEmail().clear()
                register.inputTextEmail().type(sEmail)

                register.inputTextPassword().clear()
                register.inputTextPassword().type(sPassword)

                register.inputTextPasswordConfirm().clear()
                register.inputTextPasswordConfirm().type(sConfirm)

                register.buttonEnregistrer().click()
                register.registrationErrorMessage().should('contain.text',sLabel)
            })

            it.skip('Enregistrement[USER] - Valide', () => {
                sNom             =      'Fiacre'
                sPrenom          =      'Armel'
                sEmail           =      'arelgmail.com'
                sPassword        =      'Fiacre46'
                sConfirm         =      'Fiacre46'

                register.inpuTextNom().clear()
                register.inpuTextNom().type(sNom)
                
                register.inputTextPrenom().clear()
                register.inputTextPrenom().type(sPrenom)

                register.inputTextEmail().clear()
                register.inputTextEmail().type(sEmail)

                register.inputTextPassword().clear()
                register.inputTextPassword().type(sPassword)

                register.inputTextPasswordConfirm().clear()
                register.inputTextPasswordConfirm().type(sConfirm)

                register.buttonEnregistrer().click()
            })

        })

    })
    describe("Page[CONNEXION] >",()=>{

        it('Button[SE CONNECTER] - Click', ()=>{
            register.buttonSeconnecter().click()
        })

        it('Page[CONNEXION] - Is Visible', ()=> {
            loginPage.labelBienvenueSurEVisa().should('be.visible')
        })

        it('Button[CREER UN COMPTE] - Is Visible',()=>{
            loginPage.buttonCreerUnCompte().should('be.visible')
        })

        it('Form[CONNEXION] - Is Visible',()=>{
            loginPage.formConnexion().should('be.visible')
        })

        describe("Form[CONNEXION] - Validations",()=>{
            
            describe('Input Field[ ADRESSE E-MAIL ] - Focus - Blur',() => {
                let sLabel = "L'e-mail est requis"
                  it('Label \" '+sLabel + ' \" - Is Visible', () => {
                      loginPage.inputTextEmail().focus()
                      loginPage.inputTextEmail().blur()
                      loginPage.inputTextEmailErrorMessage().should('contain.text',sLabel)
                  })     
              })
  
              let sEmail = 'vazoumana'
              describe('Input Field[ ADRESSE E-MAIL ] - Type[ '+sEmail+ ' ] - Blur', ()=>{
                  let sLabel = "L'e-mail n'est pas valide"
                  it('Label \" ' + sLabel + ' \" - Is Visible', () => {
                      loginPage.inputTextEmail().type(sEmail);
                      loginPage.inputTextEmail().blur()
                      cy.expect(validators.emailValidator(sEmail))
                      loginPage.inputTextEmailErrorMessage().should('contain.text',sLabel)
                  }) 
              })
              
  
              describe('Input Field[ MOT DE PASSE ] - Focus - Blur',() => {
      
                  let sLabel = 'Le mot de passe est requis.'
                  it('Label \" '+sLabel+ ' \" -Is Visible', () => {
                      loginPage.inputTextPassword().focus()
                      loginPage.inputTextPassword().blur()
                      loginPage.inputTextPasswordErrorMessage().should('have.text',sLabel)
                  })
                  
                  describe('Input Field[ MOT DE PASSE ] - Validation',() =>{
                      let sPassword = "ZZZZR"
                      describe("Input Field[ MOT DE PASSE ] - Type[ "+sPassword+" ] - Blur",()=>{
                          let sLabel = "Le mot de passe doit contenir au moins 8 caractères."
                          it('Label \" '+sLabel+ ' \" - Is Visible',() => {
                              loginPage.inputTextPassword().clear()
                              loginPage.inputTextPassword().type(sPassword);
                              loginPage.inputTextPassword().blur()
                              cy.expect(validators.passwordValidator(sPassword))
                              loginPage.inputTextPasswordErrorMessage().should('contain.text',sLabel)
                          })
                      })
  
                      let sPassword2 ="ZZZZRRRR"
                      describe('Input Field[ MOT DE PASSE ] - Type[ '+ sPassword2 +' ] - Blur',()=>{
                          let sLabel = "Le mot de passe doit contenir au moins une lettre minuscule."
                          it('Label \" '+ sLabel + ' \" - Is Visible',() => {
                              loginPage.inputTextPassword().clear()
                              loginPage.inputTextPassword().type(sPassword2);
                              loginPage.inputTextPassword().blur()
                              cy.expect(validators.passwordValidator(sPassword2))
                              loginPage.inputTextPasswordErrorMessage().should('contain.text',sLabel)
                          })
                      })
  
                      let sPassword3 = 'aaaaeeee'
                      describe ('Input Field[ MOT DE PASSE ] - Type[ '+sPassword3+' ] - Blur', ()=>{
                          let sLabel = "Le mot de passe doit contenir au moins une lettre majuscule."
                          it('Label \" '+ sLabel + ' \" - Is Visible',() => {
                              loginPage.inputTextPassword().clear()
                              loginPage.inputTextPassword().type(sPassword3);
                              loginPage.inputTextPassword().blur()
                              cy.expect(validators.passwordValidator(sPassword3))
                              loginPage.inputTextPasswordErrorMessage().should('contain.text',sLabel)
                          })
                      })
  
                      let sPassword4 = 'aaaaZZZZ'
                      describe('Input Field[ MOT DE PASSE ] - Type[ '+sPassword4+' ] - Blur', ()=>{
                          let sLabel = "Le mot de passe doit contenir au moins un chiffre."
                          it('Label \" '+ sLabel + ' \" - Is Visible',() => {
                              loginPage.inputTextPassword().clear()
                              loginPage.inputTextPassword().type(sPassword4);
                              loginPage.inputTextPassword().blur()
                              cy.expect(validators.passwordValidator(sPassword4))
                              loginPage.inputTextPasswordErrorMessage().should('contain.text',sLabel)
                          })
                      })
                  })   
                  
              })
        })

        describe('Connexion[USER]',()=>{

            let sEmail      =    "vazouma.gmail.com";
            let sPassword   =    "##Camm45"
            let sLabel      =    ""

            describe('Connexion[USER] - Invalid Data - Failed',()=>{

                sLabel      =    "l'e-mail ou le mot de passe est incorrecte"

                it('Label \" '+sLabel+ ' \" - Is Visible',()=>{
                    cy.login(sEmail,sPassword);
                    loginPage.errorMessage().should('contain.text',sLabel)
                })
            })

           /* describe('Connexion[USER] -Valid Data - Failed',()=>{
                sEmail = 'Siaka@gmail.com';
                sPassword = '#Shakool465'
                sLabel      =    "Désolé ce compte n'existe pas, veuillez vous enregistrer"

                it('Label \" '+sLabel+ ' \" - Is Visible',()=>{
                    cy.login(sEmail,sPassword);
                    loginPage.errorMessage().should('contain.text',sLabel)
                })
            })

            describe('Connexion[USER] - Valid Data - Success',()=>{
                sEmail = 'vdiarrassouba@gmail.com';
                sPassword = '#Camelia46'
    
                it('Page[ACCUEL] - Rediction',()=>{
                    cy.login(sEmail,sPassword);
                })
            })*/
        })
    })
})
    
