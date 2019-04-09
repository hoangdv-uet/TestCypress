describe('HL_GBT_102', function() {

    context('login', function(){
    beforeEach(function(){
      cy.viewport('iphone-6');
      cy.visit('https://accounts.sachmem.vn/users/sign_in');
      cy.get('#user_email').type('hoangphongdo1102@gmail.com');
      cy.get('#user_password').type('hquyanzx123'); 
      cy.get('#new_user > div:nth-child(6) > input').click();
    })

    it('Check', function(){
      cy.get('#navbar').should('not.be.visible')
      cy.get('.navbar-toggle').should('be.visible').click()
      cy.get('.img-rounded').should('be.visible')
    })
    it('sign out',function(){
      cy.get('.navbar-toggle').should('be.visible').click()
      cy.get('.img-rounded').should('be.visible').click()
      cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()
      cy.get(':nth-child(6) > .btn').should('be.visible')
    })
  })
})