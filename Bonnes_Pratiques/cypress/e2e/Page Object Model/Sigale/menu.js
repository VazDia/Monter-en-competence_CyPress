export class Menu {

    click( nomPage ){

        switch( nomPage ){
            case nomPage == 'Accueil' :
                cy.get('.mr-auto > .active').click();
                break
            case nomPage = 'Articles'  :
                cy.get('[routerlink="/articles"]').click()
                break
            case nomPage == "relevés"   :
                cy.get('[routerlink="/releves"]').click()
                break
            case nomPage == "Catégories":
                cy.get('[routerlink="/categories"]').click()
                break
                
        }
        cy.wait(500)
  
    }

}