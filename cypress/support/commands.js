require('cypress-downloadfile/lib/downloadFileCommand')
import 'cypress-file-upload';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// ===========================================================================================

// custom command without parameter

Cypress.Commands.add('orangeMRHlogin1', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('input[placeholder="Username"]').type("Admin")
    cy.get('input[placeholder="Password"]').type("admin123")
    cy.get('button[type="submit"]').click()

})

//  calling custom command throughout project  :  cy.orangeHRmlogin1()

// ===========================================================================================

// custom command with parameter

Cypress.Commands.add('orangeMRHlogin2', (username,password) => {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('input[placeholder="Username"]').type(username)
    cy.get('input[placeholder="Password"]').type(password)
    cy.get('button[type="submit"]').click()

})
//  calling custom command throughout project  :  cy.orangeHRmlogin2("Admin", "admin123")
//  strings  -   "Admin", "admin123

//  calling custom command throughout project  :  cy.orangeHRmlogin2(uname,pwd)
//  variables    -   uname, pwd

// ===========================================================================================

Cypress.Commands.add('addP_aygrade',()=>{ // commands can create with "_", but not good idea

       //navigate to "Pay Grades" page
       cy.contains("Admin").click()
       cy.contains("Job").click()
       cy.contains("Pay Grades").click()
       cy.contains('Add').click()

       {// adding paygrade and submit
           let r = (Math.random() + 1).toString(36).substring(7)
           cy.get( 'input[class="oxd-input oxd-input--active"]').eq(1).type("PayGRade" + r)
           cy.get( 'button[type="submit"]').click()
           cy.contains("Currencies").should("be.visible")  
           // web page changable. so, message need to change by that time
       }


})

// ===========================================================================================
