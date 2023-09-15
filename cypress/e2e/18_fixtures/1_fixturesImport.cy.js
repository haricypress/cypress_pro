
import testData from "../../fixtures/shop.demoqa.json"
import randomEmail  from "../../fixtures/randomEmail.json"

describe("fixtures demo", () => {

    it("1. verify submit button disable or not - weak password", () => {

        cy.visit("https://shop.demoqa.com/my-account/")
        cy.get("#reg_username").type(testData.userName)
        cy.get("#reg_email").type(testData.EmailAddr)
        cy.get("#reg_password").type(testData.weakpassword)

        // cy.get('button[name="register"]').should("be.disabled")
        //or
        cy.get('button[name="register"]').should("have.attr", "disabled", "disabled")

    })
    it("2. verify already registered user try to register again", () => {

        cy.visit("https://shop.demoqa.com/my-account/")
        cy.get("#reg_username").type(testData.userName)
        cy.get("#reg_email").type(testData.EmailAddr)
        cy.get("#reg_password").type(testData.strongPassword)
        cy.get('button[name="register"]').click()

        
        // cy.get("#username").should("have.attr", 'value', testData.userName)
        // or
        cy.get("#username").should("have.value", testData.userName)

    })
})

// =====================================================================================
/*

imported test data file location : cypress\fixtures\shop.demoqa.json


{
    "userName"       : "kishore",
    "E_mailAddr"     : "kishore@gmail.com",
    "weakpassword"   : "dsdsd",
    "strongPassword" : "xfsgfxvxffxgvcx"
}

     in .json file test data     :     "E_mailAddr"  variable name,  "E_" used
     in cypress script file      :      cy.get("#reg_email").type(testData.E_mailAddr)

     in .json file test data     :     "E-mailAddr"  variable name,  "E-" used
     in cypress script file      :      cy.get("#reg_email").type(testData["E-mailAddr"])




*/

it.only("randomly generated E-mail address",()=>{

    // import randomEmail  from "../../fixtures/randomEmail.json"
    
    cy.visit("https://shop.demoqa.com/my-account/")
        cy.get("#reg_username").type(randomEmail.userName)
        let r = (Math.random() +1).toString(36).substring(7)
        cy.get("#reg_email").type(randomEmail.EmailAddr+ r +'@gmail.com')
        cy.get("#reg_password").type(randomEmail.strongPassword)

        cy.wait(5000)
                cy.get('button[name="register"]').click()

        // cy.get("#username").should("have.attr", 'value', testData.userName)
        // or
        cy.get("#username").should("have.value", randomEmail.userName)


})