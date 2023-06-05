/// <reference types="cypress" />

// On pouvait egalement importer seulement que les methode de la classe TodoPage ce qui nous éviterais de faire une instanciation de celle-ci
import { TodoPage } from "../../PageObject/todoPage"

describe("Mon deuxième Test",()=>{
    const todoPage = new TodoPage
    beforeEach(()=>{
        todoPage.naviguer()
    })
    it('Deuxième manière de faire',()=>{
         // Ecrire Bonjour dans le champs et appuyer la touche entrer
        todoPage.AjouterTodo('Bonjour')
        // Ecrire encore une fois le mot Bonsoir
        todoPage.Saisir('Bonsoir')
        // Attendre 5 secondes
        cy.wait(5000)
        //Selection et effacer le mot bonsoir et ecrire bonne nuit et appuyer sur la touche entrer.
        todoPage.SelectionnerEtEffacer()
        todoPage.AjouterTodo('Bonne nuit')
    })

    // s'il y avait un autre test d'integration la méthode navigate se serait encore exécutée
})