describe('hooks functions', function(){
    before(function(){
        cy.log('before hook')
    })
    beforeEach(function(){
        cy.log('beforeeach it')
    })
    it('before and beforeeach hooks', function(){
        cy.log('inside it1')
    })
    it('before and beforeeach hooks 2', function(){
        cy.log('inside it2')
    })
    it('before and beforeeach hooks 2', function(){
        cy.log('inside ieasddd2')
    })

    afterEach(function(){
        cy.log('after each it')
    })
    after(function(){
        cy.log('after hook')
    })
   
})