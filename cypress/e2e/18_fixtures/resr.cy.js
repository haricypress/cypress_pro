
// in 4th test-case Error is there - while "json" file writing last "," need remove

describe('verifying - if login manually logout, else check url', () => {

    it.only('3. verify single correct credential and multiple wrong credentials', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        // cy.fixture('login.json').then((data) => {

        //     data.forEach((userdata) => {







        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type("Admjin")  // wrong username
        cy.get('input[type="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        try {
            if (response.status<400){

                     // if login
                     cy.get('p.oxd-userdropdown-name').click()
                     cy.get('a[role="menuitem"]').eq(3).click();
                     cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                     cy.writeFile('cypress/fixtures/output/validCredentials.json',
                         "{" +
                         '"username" : ' + '"' + userdata.username + '",\n' +
                         '"password" : ' + '"' + userdata.password + '"\n' + "},",
                         { flag: 'a+' })
                 }// if
                 
            else
                cy.log("fail")
        }

        catch (AssertionError) {

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        }











        // cy.get('body').then(($body1) => {

        //     try {

        //         if ($body1.find('p.oxd-userdropdown-name').length > 0)

        //             cy.log("pass")
        //         else
        //             cy.log("fail")
        //     }
        //     catch {

        //     }
        // })















        // // if login
        // cy.get('p.oxd-userdropdown-name').click()
        // cy.get('a[role="menuitem"]').eq(3).click();
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')



        // // if not login
        // cy.contains("Login").should("be.visible")



        //     })// forEach
        // })// fixtures

    })// it ==================================================================================

})// describe


