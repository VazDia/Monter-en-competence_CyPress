export class Article {

    buttonModifier(){        return cy.get('.footerBar > :nth-child(4)')     }
    buttonEnregistrer(){    return cy.get('[pbutton=""]')}
    
    inputTextDesignationPersonnalisee(){              return cy.get(':nth-child(4) > .text-style')    }
    inputTextInstruction(){              return cy.get(':nth-child(6) > .text-style')    }

    selectArticle(){                 return cy.get('.p-selectable-row')             }
    selectCategorie(){          return cy.get('.text-style > .p-dropdown > .p-dropdown-trigger');   }
    selectCategorieOption(){            return cy.get('.p-dropdown-item')   }

    checkboxActif(){                    return cy.get('.checkbox-style > .p-checkbox > .p-checkbox-box')   }
// 

}