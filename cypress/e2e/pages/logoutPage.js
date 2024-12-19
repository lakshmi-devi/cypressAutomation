class LogoutPage{

    getLogoutButton(){
        return 'Log Out'
    }

    clickLogoutButton(){
        cy.contains(this.getLogoutButton()).click()
    }
}

export default LogoutPage;