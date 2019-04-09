describe('HL-GBT_12.spec',function(){
    context('login',function(){
        beforeEach(function(){
            cy.visit('https://hoclieu.sachmem.vn');
            cy.contains('Đăng nhập').click();
            cy.get('#user_email').type('hoangphongdo1102@gmail.com');
            cy.get('#user_password').type('hquyanzx123'); 
            cy.get('#new_user > div:nth-child(6) > input').click();
    })
    it('Test', function(){
        cy.get('span > .text-dark').should('be.visible')
        cy.get('#userDropdown').click()

    })
    it('chageResolution',function(){
        cy.viewport(1024, 768);
        cy.get('span > .text-dark').should('be.visible')   
        cy.viewport(100 , 100);
        cy.get('span > .text-dark').should('be.visible')
        cy.viewport(1000, 1000);
        cy.get('span > .text-dark').should('be.visible')       
    })
})  
})