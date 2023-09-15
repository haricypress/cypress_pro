import objLoginPage from "../../pageObjectModels/loginPage.po"
import objAaddJobTitle from "../../pageObjectModels/addJobTitle.po"
import ObjAdminPage from "../../pageObjectModels/AdminPage.po"

describe('verify to Add Job Title', () => {
  it('verify to Add Job Title', () => {


    //web page open
    cy.visit(objLoginPage.orangeHrmUrl())


    //login
    objLoginPage.credentialUname()
    objLoginPage.credentialPwd()
    objLoginPage.button()
    objLoginPage.shouldBeVisible()


    //navigate to job title page
    cy.contains(ObjAdminPage.displayAdminText()).click()
    cy.contains(ObjAdminPage.displayJob()).click()
    cy.contains(ObjAdminPage.displayJobTitles()).click()
    objAaddJobTitle.addButton()


    // //adding job title      Note : job title is always unique
    objAaddJobTitle.jobTitleInput()
    objAaddJobTitle.jobDescription()
    objAaddJobTitle.submitButton()
    objAaddJobTitle.successMessage()
 

  })
})

