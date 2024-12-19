
describe('hooks in real time', function(){
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
    })
    it('click on admin and search using username', function(){
        cy.contains('Admin').click()
        cy.xpath('//div[@class="oxd-input-group oxd-input-field-bottom-space"]//div//input[@class="oxd-input oxd-input--active"]').type('Admin')
        cy.get('button[type="submit"]').click()
    })

    it('click on admin and search using empname', function(){
        cy.contains('Admin').click()
        cy.get('input[placeholder="Type for hints..."]').type('James Butler')
        cy.get('button[type="submit"]').click()
    })

    afterEach(function(){
        cy.get('.oxd-userdropdown-tab').click()
        cy.contains('Logout').click()
    })
})