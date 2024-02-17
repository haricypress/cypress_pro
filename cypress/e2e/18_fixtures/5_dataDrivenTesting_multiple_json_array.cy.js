
const fixtureVariable = [

    {
        "name": "testData2",
        'context': 'testData2'
    },
    {
        "name": "arrayJSON",
        'context': 'arrayJSON'
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


                // // non-array kind JSON data
                cy.log(this.data.userName)

                // array kind JSON data
                for (let i of this.data) {
                    cy.log(i.userName)
                }

                // cy.visit("https://shop.demoqa.com/my-account/")
                // cy.get("#reg_username").type(this.data.userName)

                // cy.get("#reg_email").type(this.data.EmailAddr)

                // cy.get("#reg_password").type(this.data.strongPassword)
                // cy.get('button[name="register"]').click()


                // cy.get("#username").should("have.value", this.data.userName)


            })
        })
    })
})
