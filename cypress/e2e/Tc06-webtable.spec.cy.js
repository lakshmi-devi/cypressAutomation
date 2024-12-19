describe('handling webtable', function(){
    xit('webtable demo', function(){
        cy.visit('https://the-internet.herokuapp.com/tables')

        cy.get('#table1').contains('http://www.jsmith.com').should('be.visible')
        cy.get('#table1>tbody>tr:nth-child(1)>td:nth-child(3)').contains('jsmith@gmail.com')

        cy.get('#table1>tbody>tr>td:nth-child(2)').each(($ele,index,$list)=>{
            const text = $ele.text();
            cy.get('#table1>tbody>tr>td:nth-child(4)').eq(index).then(function(due){
                if(text.includes('Jason')){
                 const dueAmount = due.text()
                 expect(dueAmount).to.equal('$100.00')
                }
            })

        })
    })
    it('webtable demo 2', function(){
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1>tbody>tr>td:nth-child(1)').each(($ele,$web)=>{
           const firstName = $ele.text()
           if(firstName.includes('Conway')){
            cy.get('#table1>tbody>tr>td:nth-child(5)').eq($web).then(function(webName){
                const websiteName = webName.text()
                expect(websiteName).to.equal('http://www.timconway.com')
            })
           }
        })
    })
})