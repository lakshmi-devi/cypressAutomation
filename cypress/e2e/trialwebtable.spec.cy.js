describe('this is trial webpage', function(){
    it('this is table demo', function(){
        cy.visit('https://the-internet.herokuapp.com/tables#edit')
        cy.get('#table1>tbody>tr').each(($row)=>{
            const fName = $row.find('td:nth-child(2)')
            const dueAmount = $row.find('td:nth-child(4)')
            const text = fName.text();

            if(text.includes('Tim')){
               const due = dueAmount.text()
               expect(due).to.equal('$50.00')
            }
        })
        
    })
})