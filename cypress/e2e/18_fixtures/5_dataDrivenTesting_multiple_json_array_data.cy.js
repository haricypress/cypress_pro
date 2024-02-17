
const fixtureVariable = [

    {
        "name": "arrayJSON1",
        'context': 'arrayJSON1'
    },
    
    {
        "name": "arrayJSON2",
        'context': 'arrayJSON2'
    }
]

//=================================================================================

describe("load test data from multiple files demo", function () {

    fixtureVariable.forEach((vFixture) => {

        describe(vFixture.context, () => {
            before(function () {  // hook  -  "before()"

                cy.fixture(vFixture.name).then(function (data) {
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
