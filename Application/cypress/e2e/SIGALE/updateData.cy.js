import { Updating } from "../../PageObject/updating"
describe('Test des produits Azure',{viewportWidth: 1920,

    viewportHeight: 1080,},()=>{
  const updating = new Updating;
  var designation = 'Comité AOP';
  var integration = 'Instructions grand frais';
  /*beforeEach(()=>{
    updating.naviguer();
  })*/
  it('Naviguer',()=>{
    updating.naviguer()
  })

  it('connexion',()=>{
      updating.connexion('lunettes','glasses');
  })
  
  it("Enregistrement",()=>{
    updating.prerequis()
    updating.enregistrementNonActive(designation, integration)
    cy.get('.p-selectable-row.p-highlight > :nth-child(5)').should('contain',designation)
  })

  it("Modification",()=>{
    updating.remise()
    designation = 'Comité AOP fruité';
    integration = 'Instructions grand frais, à prendre en considération';
    updating.enregistrementNonActive(designation, integration)
  })

  it('Deconnexion',()=>{
    updating.Deconnexion()
  })
})
  
  
  
  
  
  
  