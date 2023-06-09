export class Accueil {

    labelRepubliqueDeCoteDIvoire(){                        return cy.get('.gap-5 > span')  }
    
    buttonSeConnecter(){                         return cy.get('[routerlink="/connexion"]') }
    buttonCreerUnCompte(){                       return cy.get('[routerlink="/enregistrement"]')}
    buttonFaireUneDemande(){                     return cy.contains('Faire une demande') }

}