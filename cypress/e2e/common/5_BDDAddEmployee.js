import { Given, And, When } from "cypress-cucumber-preprocessor/steps";

import objLoginPage from "../../pageObjectModels/loginPage.po"
import objAndEmployee from "../../pageObjectModels/addEmployee.po"

Given ("user launch application", () => {

    cy.visit("/")

})
When("user enter usernam as {string}", (username) =>{

    objLoginPage.userName().type(username)
})
When("user enter password as {string}", (password) => {

    objLoginPage.password().type(password)
})

And("user click on login button", () => {

    objLoginPage.button()
})
When("user should navigate to dashboard page", () => {

    cy.url().should('include',"web/index.php/dashboard/index")
})

And("user click on PIM menu", () => {

objAndEmployee.PIMclick()
})

And("user click on And employee", () => {

    objAndEmployee.AndEmployeeClick()
})
And("user enter firstname as {string}", (firstName) =>{

    objAndEmployee.firstName().type(firstName)
})

And("user enter lastname as {string}", (lastName) => {

    objAndEmployee.lastName().type(lastName)
})

And("user click on save button", () => {

    objAndEmployee.savaButton()
})

Then("user should get successfull message", () => {

    objAndEmployee.successMessage()
})

Then("user should get Error message", () => {
objAndEmployee.errorMessage()

})