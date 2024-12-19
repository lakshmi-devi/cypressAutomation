describe('radio button function', function(){
    it('radio button func', function(){
       cy.visit("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/")
       cy.get('#radio-choice-0a').should('not.be.checked').click({force:true});
       cy.get('#radio-choice-0b').should('not.be.checked').click({force:true});


       cy.get('#radio-choice-h-2a').click({force:true});
       cy.get('#radio-choice-h-2b').should('not.be.checked').click({force:true});
    })
})