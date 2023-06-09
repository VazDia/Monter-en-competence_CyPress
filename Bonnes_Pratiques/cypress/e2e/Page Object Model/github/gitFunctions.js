export class github {
    // Validation email 
    eValidation(email){
        const emailExpression = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
        return emailExpression.test(email)
    }

    //Validation mot de passe
    pValidation(password){
        const passwordExpression = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
        return passwordExpression.test(password)
    }

    errorMessage(){             return cy.get('.js-flash-alert')}

}