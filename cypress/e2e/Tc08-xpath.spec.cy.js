describe('login functionality using xpath', function(){
    it('login test using xpath', function(){
        cy.visit("https://app.manufacton.com/#/login")
        cy.xpath('//input[@placeholder="Email Address"]').type("qa@lakshmi.comp")
        cy.xpath('//input[@placeholder="Password"]').type("12345678")
        cy.xpath('//button[@class="button is-dark is-capitalized has-text-weight-bold"]').click();
    })
})