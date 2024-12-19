describe('handling browser controls', function(){
    it('handling browser back,forward,reload', function(){
        cy.visit('https://stage.manufacton.com/#/login')
        cy.get('input[placeholder="Email Address"]').type("qa@lakshmi.comp")
        cy.get('input[placeholder="Password"]').type("12345678")
        cy.get('.button.is-dark.is-capitalized.has-text-weight-bold').click();
        cy.go('back')
        cy.go('forward')
        cy.go(-1)
        cy.go(1)
        cy.reload()
    })
})