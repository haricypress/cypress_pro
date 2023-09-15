describe('ignore console Error', () => {

    it('to ingnore "console Error', () => {

        // to ingnore "console Error" use this snippet
        Cypress.on("uncaught:exception", () => {
            return false
        })

        //login
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[placeholder="Username"]').type("Admin")
        cy.get('input[placeholder="Password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        cy.contains('Dashboard').should("be.visible")

    })

})
