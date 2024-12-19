describe('using fixtures in tests', function(){
    beforeEach(function(){
        cy.fixture('manufactonLoginData').as('data')
    })
    it('login test', function(){
        cy.visit("https://app.manufacton.com/#/login")
        cy.get('input[placeholder="Email Address"]').type(this.data.validEmail)
        cy.get('input[placeholder="Password"]').type(this.data.validPassword)
        cy.get('.button.is-dark.is-capitalized.has-text-weight-bold').click();
    })
    it('login test', function(){
        cy.visit("https://app.manufacton.com/#/login")
        cy.get('input[placeholder="Email Address"]').type(this.data.invalidemail)
        cy.get('input[placeholder="Password"]').type(this.data.invalidpassword)
        cy.get('.button.is-dark.is-capitalized.has-text-weight-bold').click();
        cy.get('div[role="alert"]').should('contain','Cannot log in with this user name and password')
    })
})