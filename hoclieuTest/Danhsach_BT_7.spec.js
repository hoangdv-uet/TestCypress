describe('Danhsach_BT_7.spec', function() {
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
            cy.get('.logo').should('be.visible')
            cy.get('.container-fluid > .text-center').should('be.visible')
            cy.get(':nth-child(1) > .nav-link').should('be.visible')
            cy.get(':nth-child(2) > .nav-link').should('be.visible')
            cy.get('.navbar-nav > :nth-child(3) > .nav-link').should('be.visible')
            cy.get('#aboutDropdown').should('be.visible')
            cy.get('[aria-expanded="true"] > .fa').should('be.visible')
            cy.get('.badge').should('be.visible')
            cy.get('#languageDropdown').should('be.visible')
            cy.get('.rounded-circle').should('be.visible')
            cy.get('#userDropdown > .p-1').should('be.visible')
            cy.get('#userDropdown').should('be.visible').click()
            cy.get('div.dropdown-item').should('be.visible')
            cy.get('[href="https://accounts.sachmem.vn/users/info"]').should('be.visible')
            cy.get('.nav-item.show > .dropdown-menu > :nth-child(3)').should('be.visible')


        })
    })
})