
Cypress.config('baseUrl', 'https://stage.manufacton.com')

describe('login functionality', function(){
    it('login test', function(){
        cy.visit("/")
        cy.get('input[placeholder="Email Address"]').type("qa@lakshmi.comp")
        cy.get('input[placeholder="Password"]').type("12345678")
        cy.get('.button.is-dark.is-capitalized.has-text-weight-bold').click();
    })
})
