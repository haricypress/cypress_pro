
const fixturefiles = [
    {
        "name": "register/details",
        "fileName": "register/details"
    },

    {
        "name": "shop.demoqa",
        "fileName": "shop"
    },

    {
        "name": "testData1",
        "fileName": "testData1"
    },

    {
        "name": "testData2",
        "fileName": "testData2"
    }
]


describe("data driven testing", () => {

    fixturefiles.forEach((vfixture) => {


        describe(vfixture.fileName, () => {


            before(function () {

                cy.fixture(vfixture.name).then(function (data) {
                    this.data = data

                })
            })


            it("verify already registered user, try to register again", function () {

                cy.visit("https://shop.demoqa.com/my-account/")

                cy.get("#reg_username").type(i.userName)
                cy.get("#reg_email").type(i.EmailAddr)
                cy.get("#reg_password").type(i.strongPassword)
                cy.get('button[name="register"]').click()

                cy.get("#username").should("have.value", i.userName)

            })
        })
    })

})
