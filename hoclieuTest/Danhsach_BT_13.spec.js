Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Danhsach_BT_13.spec', function() {
    context('Đăng nhập', function(){
        beforeEach(function(){
          cy.visit('https://hoclieu.sachmem.vn');
          cy.contains('Đăng nhập').click();
          cy.get('#user_email').type('hoangphongdo1102@gmail.com');
          cy.get('#user_password').type('hquyanzx123'); 
          cy.get('#new_user > div:nth-child(6) > input').click();
        })
        it('Test', function(){
            cy.get('span > .text-dark').should('be.visible').click()
            cy.get(':nth-child(2) > :nth-child(1) > .row > .col-9 > .text-dark').should('be.visible').click()
            cy.get('#optionDropdown').should('be.visible').click()
            cy.get('[data-target="#editAssignmentModal"]').should('be.visible')
            cy.get('[data-target="#resultExamModal"]').should('be.visible')
            cy.get('#dropdown_0 > :nth-child(3)').should('be.visible')
            cy.get('[href="/live_class/class/5c6cf60f0966f254d79b4c34/result_assignment_detail/5cad1405911abf370802d468"]')
            .should('be.visible')
            cy.get('#dropdown_0 > :nth-child(5)').should('be.visible')
            cy.get('#dropdown_0 > :nth-child(6)').should('be.visible')
        })
    })
})
