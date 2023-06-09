export class Home {
    
    selectionMgazin(){                  return cy.get('.p-dropdown-label')   }

    optionMagazin(){                    return cy.get('.p-dropdown-item')    }
    loginErrorMessage(){                return cy.get('.text-danger')  }
    homePageWelcomeLabel(){             return cy.contains("Bonjour Kevin, bienvenue sur l'application SIGALE Concurrence")} 
}