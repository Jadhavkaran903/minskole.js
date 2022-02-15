
describe('Verify The radio button functionality', () => {
    it('Verify the radio button functionality with click() method', () => {
        cy.visit('https://demoqa.com/radio-button')
        cy.get('#yesRadio').click({ force: true }).should('be.checked')
        cy.get('.text-success').should('have.text', 'Yes')
        cy.get('#impressiveRadio').click({ force: true }).should('be.checked')
        cy.get('#yesRadio').should('not.be.checked')
  
    })
  
    it('verify the radio button functionality with check() with common attribute method', () => {
        cy.visit('https://demoqa.com/radio-button')
        cy.get('.custom-control-inline').first().children('.custom-control-input').check({ force: true })
        cy.get('.custom-control-inline').first().children('.custom-control-input').should('be.checked')
        cy.get('.custom-control-inline').eq(1).children('.custom-control-input').check({ force: true })
        cy.get('.custom-control-inline').first().children('.custom-control-input').should('not.be.checked')
        cy.get('.text-success').should('have.text', 'Impressive')
    })
  
    it('verify the radio button functionality with check() with unique attribute method', () => {
        cy.visit('https://demoqa.com/radio-button')
        cy.get('#yesRadio').check({ force: true }).should('be.checked')
        cy.get('.text-success').should('have.text', 'Yes')
        cy.get('#impressiveRadio').check({ force: true }).should('be.checked')
        cy.get('#yesRadio').should('not.be.checked')
    })
  })