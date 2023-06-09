export class LoginPage {

    inputTextEmail(){                                   return       cy.get(':nth-child(1) > .p-inputtext')    }
    inputTextEmailErrorMessage(){                       return       cy.get(':nth-child(1) > .error-message') }

    inputTextPassword(){                                return       cy.get(':nth-child(2) > .p-inputtext')    }
    inputTextPasswordErrorMessage(){                    return       cy.get(':nth-child(2) > .error-message')}
    
    errorMessage(){                                     return       cy.get('[style="color: red; margin-left: 75px; position: relative;"]')}
    labelBienvenueSurEVisa(){                           return       cy.contains('BIENVENUE SUR E-VISA')}

    buttonCreerUnCompte(){                              return       cy.get('.col-5 > .flex > a')}

    formConnexion(){                                    return       cy.get('p-card') }
}