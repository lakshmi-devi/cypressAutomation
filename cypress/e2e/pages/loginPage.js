class LoginPage{
    getEmailField(){
        return 'input[type="email"]';
    }
    getPassword(){
        return 'input[type="password"]'
    }
    getSubmit(){
        return 'log in'
    }

    enterEmail(email){
        cy.get(this.getEmailField()).type(email)
    }

    enterPassword(password){
        cy.get(this.getPassword()).type(password)
    }

    clickLogin(){
        cy.contains(this.getSubmit()).click()
    }
}

export default LoginPage;