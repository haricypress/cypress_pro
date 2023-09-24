import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

import objLoginPage from "../../pageObjectModels/loginPage.po"
import objDashBoardPage from "../../pageObjectModels/dashBoard.po"

Given("user launch application", () => {

    // cy.visit("/")
    cy.visit(objLoginPage.orangeHrmUrl())
})



When("user enter usernam as {string}", (username) => {

    cy.get(objLoginPage.credentialUname()).type(username)
})


When("user enter password as {string}",(password) =>{

    cy.get(objLoginPage.credentialPwd()).type(password)

})

And("user click on login button", () => {

    cy.get(objLoginPage.button())

})

Then("user should navigate to dashboard page", () =>{
    
    //can check in diff ways, use anyone way

    // for exact verification
    cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    // or

    // for partial verification
    cy.url().should('include',"web/index.php/dashboard/index")
    // or
    cy.contains(objDashBoardPage.displayDashBoardText()).should("be.visible")

})

