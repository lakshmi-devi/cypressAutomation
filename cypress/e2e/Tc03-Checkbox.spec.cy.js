describe('checkbox functionality', function(){
    it('checkbox func', function(){
        cy.visit("https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/")
        cy.get('#checkbox-v-2a').should('not.be.checked').check({force:true}).should('be.checked')
        cy.get('#checkbox-v-2b').should('not.be.checked').check({force:true}).should('be.checked')
    })
})