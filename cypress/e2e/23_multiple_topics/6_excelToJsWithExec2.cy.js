
import jobTitle from '../../pageObjectModels/addJobTitlelWithInput.po'

describe('verify data from excel to JS', () => {

    before(function () {  // create js file with excel data
        cy.exec('node cypress/e2e/23_multiple_topics/4_excelToJson.js')

        cy.fixture('/output/jobTitleDetails.json').then(function (data) {
            this.data = data
        })
    })

    beforeEach(() => { // create session to login orangeHRM webpage
        cy.session('login orangeHRM', () => {
            cy.orangeMRHlogin1()
        })
    })
// ===========================================================================================
    it('1. verify add jobTitle, session', function () {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')
        this.data.forEach((data) => {
            jobTitle.addButton()
            jobTitle.jobTitleInput(data.jobTitle)
            jobTitle.jobDescription(data.desc)
            jobTitle.submitButton()
            jobTitle.successMessage()
            cy.wait(3000)  // for slow internet connection, waits for 3 sec
        })
    })
})