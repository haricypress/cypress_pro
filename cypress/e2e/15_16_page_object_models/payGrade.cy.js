import objLoginPage from "../../pageObjectModels/loginPage.po"
import objpayGrade from "../../pageObjectModels/payGrade.po"

describe('verify Adding pay grade', () => {

    it('verify adding pay grade', () => {

        //web page open
        cy.visit(objLoginPage.orangeHrmUrl())


       //navigate to "Pay Grades" page
        objLoginPage.credentialUname()
        objLoginPage.credentialPwd()
        objLoginPage.button()
        objLoginPage.shouldBeVisible()


        //navigate to "Pay Grades" page
        cy.contains("Admin").click()
        cy.contains("Job").click() 
        cy.contains("Pay Grades").click()
        cy.contains('Add').click()

        {//variables
            let r = (Math.random() + 1).toString(36).substring(7)
            objpayGrade.payGradeInput().type("PayGRade"+r)
            objpayGrade.submit().click()
            objpayGrade.successMessage().should("be.visible")
        }

    })

})
