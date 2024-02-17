

/*

                    not completed
 Scenario  : 
                loading test data from multiple JSON files,
                array and non-array test data from fixtures
*/

const arrayJSON = [

    {
        "name": "arrayJSON1",
        'context': 'arrayJSON1'
    },
]

const JSON = [

    {
        "name": "testData1",
        'context': 'testData1'
    }
]

//=================================================================================

describe("verify Load test data from multiple JSON files with array", function () {

    fixtureVariable.forEach((arrayJSON) => {

        describe(arrayJSON.context, () => {
            before(function () {  // hook  -  "before()"

                cy.fixture(arrayJSON.name).then(function (data) {
                    this.data = data
                })
            })

            it("verify already registered user try to register again", function () {

                for (let i of this.data) {

                    cy.visit("https://shop.demoqa.com/my-account/")

                    cy.get("#reg_username").type(i.userName)
                    cy.get("#reg_email").type(i.EmailAddr)
                    cy.get("#reg_password").type(i.strongPassword)
                    cy.get('button[name="register"]').click()

                    cy.get("#username").should("have.value", i.userName)
                }

            })
        })
    })
})
