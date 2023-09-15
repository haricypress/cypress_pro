import jobTitle from "../../pageObjectModels/addJobTitle.po"
import empStatus from "../../pageObjectModels/emplymentStatus.po"
import payGrade from "../../pageObjectModels/payGrade.po"
import jobcategory from "../../pageObjectModels/jobCategory.po"

describe('session demo', () => {

    beforeEach(() => {
        cy.session('login orangeHRM', () => {
            cy.orangeMRHlogin1()
        })
    })

    it('1. verify add jobTitle, session demo', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle')
        cy.wait(3000)
        jobTitle.jobTitleInput()
        jobTitle.jobDescription()
        jobTitle.submitButton()
        jobTitle.successMessage()

    })
    it('2. verify Employee status', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveEmploymentStatus')
        empStatus.employmentInput()
        empStatus.submit()
    })

    it('3. verify payGrade, session', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/payGrade')
        payGrade.submitPayGrade()
        payGrade.successMessage()
    })
    it('4. verify adding jobCategory, session', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobCategory')
        jobcategory.jobCategoryInput()
        jobcategory.submit()
        jobcategory.successfullyMessage()
    })
})