
import jobTitle from '../../pageObjectModels/addJobTitlelWithInput.po'
import jobTitles from "../../fixtures/output/jobTitleDetails.json"

describe('verifying import data from JSON file and submit multiple jobTitles', () => {

    beforeEach(() => { // create session to login orangeHRM webpage
        cy.session('login orangeHRM', () => {
            cy.orangeMRHlogin1()

        })

    })

    jobTitles.forEach((data) => {  // getting jobTitle details one by one from JSON file

        it('test 1. verifying add multiple jobTitles from json file, session used', function () {

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')
            jobTitle.addButton()
            jobTitle.jobTitleInput(data.jobTitle)
            jobTitle.jobDescription(data.desc)
            jobTitle.submitButton()
            jobTitle.successMessage()
            cy.wait(3000)  // for slow internet connection, waits for 3 sec

        })
    })
})

/*
==================================================================================================

before run this script, need below data in JSON file,

JOSN file : cypress/fixtures/output/jobTitleDetails.json


[
    {
        "jobTitle": "QA engineer1",
        "desc": "automation and manual testing1"
    },
    {
        "jobTitle": "QA engineer2",
        "desc": "automation and manual testing2"
    },
    {
        "jobTitle": "QA engineer3",
        "desc": "automation and manual testing3"
    }
]

==================================================================================================

*/