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
            cy.get('#dropdown_1 > :nth-child(3)').should('be.visible')
            cy.get('[href="/live_class/class/5c6cf60f0966f254d79b4c34/result_assignment_detail/5c6cf62d0966f254d79b4c35"]')
            .should('be.visible')
            cy.get('#dropdown_1 > :nth-child(5)').should('be.visible')
            cy.get('#dropdown_1 > :nth-child(6)').should('be.visible')
        })
    })
})