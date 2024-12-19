
Cypress.config('defaultCommandTimeout', 8000)

import LoginPage from "./pages/loginPage";
import LogoutPage from "./pages/logoutPage";
import PrefabPage from "./pages/prefabPage";



describe('test using page object model', function(){
    
    const loginPage = new LoginPage();
    const logoutPage = new LogoutPage();
    const prefabPage = new PrefabPage();

        beforeEach(function(){
            cy.fixture('manufactonLoginData').as('data')
        })

        it('POM implementation click prefab', function(){
            cy.visit('/')
            loginPage.enterEmail(this.data.validEmail)
            loginPage.enterPassword(this.data.validPassword)
            loginPage.clickLogin()
            
           prefabPage.clickExpandIcon()
           prefabPage.clickProjectPlannerMenu() 
           logoutPage.clickLogoutButton()
        })
})