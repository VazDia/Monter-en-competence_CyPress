export class TodoPage{
    naviguer(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    AjouterTodo(text){
        cy.get('.new-todo').type(text + '{enter}')
    }
    Saisir(text){
        cy.get('.new-todo').type(text )
    }

    SelectionnerEtEffacer(){
        cy.get('.new-todo').type('{Selectall}{backspace}')
    }

}