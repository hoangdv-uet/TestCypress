describe('Danhsach_BT_20.spec', function() {
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
            cy.get('.list-group.mt-2 > .list-group-item > .row > .col-9 > .text-dark').should('be.visible').click()
            cy.get(':nth-child(1) > .row > .col-2 > .dropdown > #optionDropdown').should('be.visible').click()
            cy.get('#dropdown_0 > .dropdown-item').should('be.visible')
        })
    })
})