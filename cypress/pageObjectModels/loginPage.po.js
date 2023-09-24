class loginPage {

    // ----------------upto login--------------

    orangeHrmUrl() {
        return "web/index.php/auth/login"
    }

    credentialUname() {
        return cy.get('input[name="username"]').type(Cypress.env('username'))
    }
    userName() {

        return cy.get('input[name="username"]')
    }
    credentialPwd() {
        return cy.get('input[name="password"]').type(Cypress.env('password'))

    }
    password() {
        return cy.get('input[name="password"]')
    }
    wrongCredentialUsername = 'Admina'

    wrongCredentialPwd() {
        return 'aa123456'
    }
    button() {
        return cy.get('button[type="submit"]').click()
    }
    shouldBeVisible() {
        return cy.contains("Dashboard").should(`be.visible`)
    }
    successfullyMessage() {
        return 'Successfully Saved'
    }
    invalidVisibleMessage() {
        return 'Invalid credentials'
    }
}

const objLoginPage = new loginPage()
export default objLoginPage;