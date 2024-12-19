describe('login functionality', function(){
    it('login test', function(){
        cy.visit("https://app.manufacton.com/#/login")
        cy.get('input[placeholder="Email Address"]').type("qa@lakshmi.comp")
        cy.get('input[placeholder="Passwordd"]').type("12348")
        cy.get('.button.is-dark.is-capitalized.has-text-weight-bold').click();
    })
})