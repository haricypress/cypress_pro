describe('verify Adding pay grade', () => {

    it('verify adding pay grade', () => {


        //web page open
        cy.visit("web/index.php/auth/login") 


        //navigate to "job title" page
        cy.get('input').eq(1).type(Cypress.env('username'))
        cy.get('input').eq(2).type(Cypress.env('password'))
        cy.get("button").click()
        cy.contains("Dashboard").should(`be.visible`)


        //adding "job title"
        cy.contains("Admin").click()
        cy.contains("Job").click()
        cy.contains("Pay Grades").click()
        cy.contains('Add').click()

        {//variables
            let gaygrade = `jglfhg`
            cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row > div > div > div > div:nth-child(2) > input').type(gaygrade)
            cy.get('button[type="submit"]').click()
            cy.contains('Successfully Saved').should("be.visible")
        }

    })

})
