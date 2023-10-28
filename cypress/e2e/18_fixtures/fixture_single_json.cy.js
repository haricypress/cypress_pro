
// in 4th test-case Error is there - while "json" file writing last "," need remove

describe('verifying - if login manually logout, else check url', () => {


    it('1. correct credentials', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.fixture('login.json').then((data) => {
            data.forEach((userdata) => {
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                cy.get('input[name="username"]').type(userdata.username);
                cy.get('input[type="password"]').type(userdata.password);
                cy.get('button[type="submit"]').click();



                cy.contains("Dashboard").should('be.visible')
                cy.get('p.oxd-userdropdown-name').click();
                cy.get('a[role="menuitem"]').eq(3).click();
                cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            })// forEach
        })// fixture
    })// it ==================================================================================

    it('2. wrong credentials', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.fixture('login.json').then((data) => {
            data.forEach((userdata) => {
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                cy.get('input[name="username"]').type(userdata.username);
                cy.get('input[type="password"]').type(userdata.password);
                cy.get('button[type="submit"]').click();

                cy.contains("Invalid credentials").should("be.visible")

            })// forEach
        })// fixture
    })// it ==================================================================================
    it('3. verify single correct credential and multiple wrong credentials', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.fixture('login.json').then((data) => {

            data.forEach((userdata) => {
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

                cy.get('input[name="username"]').type(userdata.username)
                cy.get('input[type="password"]').type(userdata.password);
                cy.get('button[type="submit"]').click();

                if (userdata.username == "Admin" && userdata.password == "admin123") {

                    // if login
                    cy.get('p.oxd-userdropdown-name').click()
                    cy.get('a[role="menuitem"]').eq(3).click();
                    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

                }// if
                else {

                    // if not login
                    cy.contains("Login").should("be.visible")

                }// else

            })// forEach
        })// fixtures

    })// it ==================================================================================

    it('4. with writefile - single correct credential and multiple wrong credentials', () => {

        // Error in this test-case - in "json" file write last "," need remove

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.fixture('login.json').then((data) => {

            cy.writeFile('cypress/fixtures/output/validCredentials.json', "[\n")
            cy.writeFile('cypress/fixtures/output/inValidCredentials.json', "[\n")

            data.forEach((userdata) => {
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

                cy.get('input[name="username"]').type(userdata.username)
                cy.get('input[type="password"]').type(userdata.password);
                cy.get('button[type="submit"]').click();

                if (userdata.username == "Admin" && userdata.password == "admin123") {

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
                else {

                    // if not login
                    cy.contains("Login").should("be.visible")
                    cy.writeFile('cypress/fixtures/output/inValidCredentials.json',
                        "{" +
                        '"username" : ' + '"' + userdata.username + '",\n' +
                        '"password" : ' + '"' + userdata.password + '"\n' + "},",
                        { flag: 'a+' })
                }// else

            })// forEach
        })// fixtures

        cy.writeFile('cypress/fixtures/output/validCredentials.json',
            "]", { flag: 'a+' })
        cy.writeFile('cypress/fixtures/output/inValidCredentials.json',
            "]", { flag: 'a+' })

    })// it ==================================================================================
})// describe