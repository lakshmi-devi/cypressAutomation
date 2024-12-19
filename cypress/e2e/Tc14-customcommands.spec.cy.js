describe('using custom commands in tests', function(){
    beforeEach(function(){
        cy.fixture('manufactonLoginData').as('data')
    })
    it('login test', function(){
        cy.ManufactonLogin(this.data.validEmail, this.data.validPassword)
    })
    it('login test', function(){
        cy.ManufactonLogin(this.data.invalidemail, this.data.invalidpassword)
        cy.get('div[role="alert"]').should('contain','Cannot log in with this user name and password')
    })
})