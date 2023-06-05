export class eVisa{

    register(nom, prenom, email, motDePasse, Confirmation){
        cy.get(':nth-child(2) > .p-inputtext').type(nom);
        cy.get(':nth-child(5) > .p-inputtext').type(prenom);
        cy.get(':nth-child(8) > .p-inputtext').type(email)
        cy.get(':nth-child(11) > .p-inputtext').type(motDePasse)
    }
}