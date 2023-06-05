/// <reference types="cypress" />
describe('Travailler avec les images', ()=>{
    it.skip("Essai",()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
    })
    it('Télécharger un seul fichier',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('mesTextes.txt')>
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get('h3').should('have.text','File Uploaded!')
        
    })
    it("Glisser et Déposer",()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile("mesTextes.txt",{subjectType:'drag-n-drop'})
        cy.wait(2000)
        cy.get('#drag-drop-upload').contains("mesTextes.txt");
    })
    it("Télécharger plusieurs fichiers",()=>{
        
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.wait(2000)
        cy.get('#filesToUpload').attachFile(['mesTextes.txt','monFichier.json','example.json'])
        cy.get('#fileList > :nth-child(1)').should('contain.text','mesTextes.txt')
        cy.get('#fileList > :nth-child(2)').should('contain.text','monFichier.json')
        cy.get('#fileList > :nth-child(3)').should('contain.text','example.json')
    })
})
 