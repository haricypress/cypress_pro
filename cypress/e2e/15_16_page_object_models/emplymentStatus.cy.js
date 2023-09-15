import objLoginPage from "../po_lists/loginPage.po"
import objEmploymentStatus from "../../pageObjectModels/emplymentStatus.po"

describe('verify to Add Employment status', () => {
    it('verify to Add Employment status', () => {

        //web page open
        cy.visit(objLoginPage.orangeHrmUrl())


        //navigate to "Pay Grades" page
        objLoginPage.credentialUname()
        objLoginPage.credentialPwd()
        objLoginPage.button()
        objLoginPage.shouldBeVisible()

        // navigate to employee status page
        objEmploymentStatus.navigateToEmpStatusPage()

        {
            //variables
            let r = (Math.random() + 1).toString(36).substring(7)
            objEmploymentStatus.employmentInput().type("df" + r)
            objEmploymentStatus.submit().click()
            cy.contains(objLoginPage.successfullyMessage()).should("be.visible")
        }

    })
})

