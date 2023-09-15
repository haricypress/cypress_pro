//importing 
import objpayGrade from "./2_payGrade.po"
import loginFixtures from "../../fixtures/orangeHRMlogin.json"

//====================================================================================

describe('verify Adding pay grade with custom command "orangeMRHlogin"', () => {

    it('custom "login" command without parameters', () => {

        //login
        cy.orangeMRHlogin1()
        cy.contains(objpayGrade.displayDashBoardText()).should("be.visible")


        //navigate to "Pay Grades" page
        cy.contains("Admin").click()
        cy.contains("Job").click()
        cy.contains("Pay Grades").click()
        cy.contains('Add').click()

      

         {// adding paygrade and submit
            let r = (Math.random() + 1).toString(36).substring(7)
            objpayGrade.payGradeInput().type("PayGRade"+r)
            objpayGrade.submit().click()
            objpayGrade.successMessage().should("be.visible")
        }
    })
    //====================================================================================

    it('custom "login" command with hardcode parameters', () => {

        //login
        cy.orangeMRHlogin2("Admin", "admin123")
        cy.contains(objpayGrade.displayDashBoardText()).should("be.visible")


        //navigate to "Pay Grades" page
        cy.contains("Admin").click()
        cy.contains("Job").click()
        cy.contains("Pay Grades").click()
        cy.contains('Add').click()

        {//variables
            let r = (Math.random() + 1).toString(36).substring(7)
            objpayGrade.payGradeInput().type("PayGRade" + r)
            objpayGrade.submit().click()
            objpayGrade.successMessage().should("be.visible")
        }

    })
    //====================================================================================

    it('custom "login" command with "fixtures" parameters', () => {

        //login
        cy.orangeMRHlogin2(loginFixtures.userName, loginFixtures.password)
        cy.contains(objpayGrade.displayDashBoardText()).should("be.visible")


        //navigate to "Pay Grades" page
        cy.contains("Admin").click()
        cy.contains("Job").click()
        cy.contains("Pay Grades").click()
        cy.contains('Add').click()

        {// adding paygrade and submit
            let r = (Math.random() + 1).toString(36).substring(7)
            objpayGrade.payGradeInput().type("PayGRade" + r)
            objpayGrade.submit().click()
            objpayGrade.successMessage().should("be.visible")
        }

    })
    //====================================================================================


    it.only('custom "login" command with "fixtures" parameters', () => {

        //login
        cy.orangeMRHlogin2(loginFixtures.userName, loginFixtures.password)
        cy.contains(objpayGrade.displayDashBoardText()).should("be.visible")

        cy.addP_aygrade() // commands can create with "_", but not good idea

    })


})
