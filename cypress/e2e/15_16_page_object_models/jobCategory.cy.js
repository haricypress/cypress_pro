import objLoginPage from "../../pageObjectModels/loginPage.po"
import objJobCategory from "../../pageObjectModels/jobCategory.po"

describe('verify to Add Job category', () => {
    it('verify to Add Job category', () => {

        //web page open
        cy.visit(objLoginPage.orangeHrmUrl())


        //navigate to "Job Category" page
        objLoginPage.credentialUname()
        objLoginPage.credentialPwd()
        objLoginPage.button()
        objLoginPage.shouldBeVisible()


        //navigate to job category" page
        cy.contains("Admin").click()
        cy.contains("Job").click()
        cy.contains("Job Categories").click()
        cy.contains('Add').click()


        {
            //variables
            let r = (Math.random() + 1).toString(36).substring(7)
            cy.get(objJobCategory.jobCategoryImput()).eq(1).type("job category"+r)
            cy.get(objJobCategory.submit()).click()
            cy.contains(objJobCategory.successfullyMessage()).should("be.visible")
             }
     
         })


})

