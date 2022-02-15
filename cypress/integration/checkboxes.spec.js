// describe('Verify the checkbox fumctionality', () => {

//     it('Verify the checkbox by using click() method', () => {
//         cy.visit('https://demoqa.com/checkbox')
//         cy.get('input[type="checkbox"]').click({force:true})
//         cy.get('input[type="checkbox"]').should('be.checked')
//         cy.get('.text-success').should('have.length',17)
//         cy.get('input[type="checkbox"]').click({force:true})
//         cy.get('input[type="checkbox"]').should('not.be.checked')
//     })

//     it('Verify the checkbox by using check() and uncheck() method', () => {
//         cy.visit('https://demoqa.com/checkbox')
//         cy.get('input[type="checkbox"]').check({force:true})
//         cy.get('input[type="checkbox"]').should('be.checked')
//         cy.get('.text-success').should('have.length',17)
//         cy.get('.text-success').should('include.text','home')
//         cy.get('input[type="checkbox"]').uncheck({force:true})
//         cy.get('input[type="checkbox"]').should('not.be.checked')
//     })

//     it('Verify the all checkbox is get check at a time by tapping on single one',()=>{
//         cy.visit('https://demoqa.com/checkbox')
//         cy.get('#tree-node-home').check({force:true})
//         //cy.get('button[class="rct-collapse rct-collapse-btn"]').first().click()  //or 
//         cy.get('.rct-option.rct-option-expand-all').click()
//         cy.get('input[type=checkbox]').should('be.checked')
//         cy.get('#tree-node-home').uncheck({force:true})
//         cy.get('input[type=checkbox]').should('not.be.checked')
//     })
// })

//===========================================================================================

describe('verify the checkbox functionality',()=>{
    it('Verify the checkbox by using click method',()=>{
        cy.visit('https://www.testingwithtechbrothers99.com/common-elements')
        cy.get('input[type="checkbox"]').first().click().should('be.checked')
    })

    it('Verify the checkbox by using check method',()=>{
        cy.visit('https://www.testingwithtechbrothers99.com/common-elements')
        cy.get('input[type="checkbox"]').check('checkbox2').should('be.checked')
        cy.get('input[type="checkbox"]').uncheck('checkbox2').should('not.be.checked')
    })

    it('Verify the checkbox by using check method by passing multiple value',()=>{
        cy.visit('https://www.testingwithtechbrothers99.com/common-elements')
        cy.get('input[type="checkbox"]').check(['checkbox2','checkbox1']).should('be.checked')
        cy.get('input[type="checkbox"]').uncheck(['checkbox2','checkbox1']).should('not.be.checked')
    })

    it('Verify the checkbox by using check method with disable element',()=>{
        cy.visit('https://www.testingwithtechbrothers99.com/common-elements')
        cy.get('input[type="checkbox"][disabled]').check({force:true}).should('be.checked')
    })
})