Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Verify the dropdown with select',()=>{
    it('Verify the dropdown with select',()=>{
        cy.visit('https://www.testingwithtechbrothers99.com/common-elements')
        cy.get('.form-control').first().select('Option1').should('have.value',1)
        cy.get('.form-control').first().select('1').should('have.contain','Option2')
       
        
    })




    
// })




// describe.only("table 3rd booking for train ticket", () => {



          

it("varify  dynamic dropdown", () => {
    cy.visit("https://paytm.com/train-tickets");
    cy.get(
      '[data-reactid="151"] > ._2WNb > .fl-input-container > #text-box'
    ).type("mum");
    cy.get('div[class="_16Y_"]')
      .find("._3ewH")
      .find("._3sXO")
      .each((el) => {
        if (el.text() === "BCT - Mumbai Central") {
        //   cy.log(el.text);
          cy.wrap(el).click({ force: true });
        }
      })     
              

      
     
    })
          
it("dyanmic dropdown",()=>{

    cy.visit("https://paytm.com/train-tickets");
    cy.get(
      '[data-reactid="164"] > ._2WNb > .fl-input-container > #text-box'
    ).type("del");
    cy.get('div[class="_16Y_"]')
      .find("._3ewH")
      .find("._3sXO")
      .each((el) => {
        if (el.text() === "NDLS - New Delhi") {
          cy.log(el);
          cy.wrap(el).click({ force: true });
        }
      });

  
})
})
