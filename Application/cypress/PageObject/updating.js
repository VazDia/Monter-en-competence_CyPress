export class Updating {
    naviguer(){
        cy.visit('https://app-releve-admin-hors-prod.azurewebsites.net/#/home') 
    }
    connexion(identifiant, motDePasse){
        cy.get(':nth-child(1) > .form-control').type(identifiant);
        cy.get(':nth-child(2) > .form-control').type(motDePasse);
        cy.wait(1000);
        cy.get('.btn').click();
    }
    Deconnexion(){
        cy.get('#utilisateurDropdown > .fas').click()
        cy.get('.utilisateur-drop-down > .btn').click()
    }
    prerequis(){
        cy.get('.p-dropdown-trigger-icon').click()
        cy.wait(500)
        cy.get(':nth-child(4) > .p-dropdown-item > .ng-star-inserted').click()
        cy.wait(500)
        cy.get('[routerlink="/articles"]').click()
        cy.get(':nth-child(1) > :nth-child(1) > p-tablecheckbox > .p-checkbox > .p-checkbox-box').click()
        cy.get('.p-datatable-scrollable-body').scrollTo('top',{duration:2000})
        cy.wait(500);
        cy.get('.footerBar > :nth-child(4)').click()
        cy.wait(500);
    }

    remise(){
        cy.get('[routerlink="/articles"]').click()
        cy.get('.p-datatable-scrollable-body').scrollTo('top',{duration:2000})
        cy.wait(500);
        cy.get('.footerBar > :nth-child(4)').click()
        cy.wait(500);

    }

   enregistrementNonActive(designation, integration){
    cy.get(':nth-child(4) > .text-style').invoke('val','')
    cy.get(':nth-child(4) > .text-style').type(designation);
    cy.wait(500);
    cy.get(':nth-child(6) > .text-style').invoke('val','')
    cy.get(':nth-child(6) > .text-style').type(integration);
    cy.wait(500);
    cy.get('.text-style > .p-dropdown > .p-dropdown-trigger').click();
    cy.wait(500);
    cy.get(':nth-child(4) > .p-dropdown-item').click();
    cy.get('[pbutton=""]').click()
    cy.wait(500)
   }

}