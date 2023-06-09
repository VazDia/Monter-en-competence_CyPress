export class Register {

    labelEnregistrement(){                        return    cy.get('[style="font-size: 28px; font-weight: bold; letter-spacing: 2px;"]') }

    formInscription(){                            return cy.get('[style="margin-left: 30px;"] > .flex')}
    
    inpuTextNom(){                                return    cy.get(':nth-child(2) > .p-inputtext') }
    inpuTextNomErrorMessage(){                    return    cy.get(':nth-child(2) > .error-message') }

    inputTextPrenom(){                            return    cy.get(':nth-child(5) > .p-inputtext') }
    inputTextPrenomErrorMessage(){                return    cy.get(':nth-child(5) > .error-message') }

    inputTextEmail(){                             return    cy.get(':nth-child(8) > .p-inputtext') }
    inputTextEmailErrorMessage(){                 return    cy.get(':nth-child(8) > .error-message') }

    inputTextPassword(){                          return    cy.get(':nth-child(11) > .p-inputtext') }
    inputTextPasswordErrorMessage(){              return    cy.get(':nth-child(11) > .error-message') }

    inputTextPasswordConfirm(){                   return    cy.get(':nth-child(14) > .p-inputtext') }
    inputTextPasswordConfirmErrorMessage(){       return    cy.get(':nth-child(14) > .error-message') }

    buttonEnregistrer(){                          return    cy.get('.p-ripple') }
    buttonSeconnecter(){                          return    cy.get('a') }

    registrationErrorMessage(){                   return   cy.get('[style="color: red; margin-left: 50px; position: relative;"]') }
}