

/*
 Scenario  : 
                loading test data from multiple JSON files from fixtures,
                after test data loaded, generating random Email address
*/

const fixtureVariable = [

    {
        "name": "register/details",   // path name
        'context': 'sub folder' //  dispaly on test runner
    },
    {
        "name": "shop.demoqa",
        'context': 'shop'
    },
    {
        "name": "randomEmail",
        'context': 'ramdonEmail'
    },
    {
        "name": "testData1",
        'context': 'ramudu'
    },
    {
        "name": "testData2",
        'context': 'testData2'
    }
]

//=================================================================================

describe("verify load test data from multiple JOSN files as object", function () {

    fixtureVariable.forEach((vFixture) => {

        describe(vFixture.context, () => {
            before(function () {  // hook  -  "before()"

                cy.fixture(vFixture.name).then(function (data) {
                    this.data = data
                })
            })

            it("verify already registered user try to register again", function () {


                cy.visit("https://shop.demoqa.com/my-account/")
                cy.get("#reg_username").type(this.data.userName)

                if (this.data.EmailAddr.includes("@")) {
                    cy.get("#reg_email").type(this.data.EmailAddr)

                }
                else {
                    // below stmt generating random Email
                    let r = (Math.random() + 1).toString(36).substring(7)

                    cy.get("#reg_email").type(this.data.EmailAddr + r + '@gmail.com')
                    // or
                    // cy.get("#reg_email").type(this.data.EmailAddr + "." + r + '@gmail.com')
                }

                cy.get("#reg_password").type(this.data.strongPassword)
                cy.get('button[name="register"]').click()

                cy.get("#username").should("have.value", this.data.userName)
                // or
                //  cy.get("#username").should("have.attr", 'value', testData.userName)

            })
        })
    })
})


/*
=================================================================================================

Note : all test data files must be in "fixtures" folder and it's sub-folder


test data file 1  : cypress\fixtures\register\details.json
(this file inside "register" sub-folder)

{
    "userName"       : "kishore",
    "EmailAddr"     : "kishore@gmail.com",
    "weakpassword"   : "dsdsd",
    "strongPassword" : "xfsgfxvxffxgvcx"
}

test data file 2  : cypress\fixtures\shop.demoqa.json
(this file inside "fixtures" folder)

{
    "userName"       : "kishore",
    "EmailAddr"     : "kishore@gmail.com",
    "weakpassword"   : "dsdsd",
    "strongPassword" : "xfsgfxvxffxgvcx"
}

test data file 3  : cypress\fixtures\testData1.json
(this file inside "fixtures" folder)
   
{
    "userName"       : "ramudu",
    "EmailAddr"     : "kishore@gmail.com",
    "weakpassword"   : "dsdsd",
    "strongPassword" : "xfsgfxvxffxgvcx"
}


test data file 4  : cypress\fixtures\testData2.json
(this file inside "fixtures" folder)

{
    "userName"       : "krishnudu",
    "EmailAddr"     : "krishnudu@gmail.com",
    "weakpassword"   : "dsdsd",
    "strongPassword" : "xfsgfxvxffxgvcx"
}

=================================================================================================

exercise  :

create cypress script for add empoyees for web page 

"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

=================================================================================================

*/