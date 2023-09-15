
const fixtureVariable = [

    {
        "name": "register/details",   // path name
        'context': 'hari' //  dispaly on test runner
    },
    {
        "name": "shop.demoqa",
        'context': 'kishore'
    },
    // {
    //     "name": "randomEmail",
    //     'context': 'ramdonEmail'
    // },
    {
        "name": "testData1",
        'context': 'ramudu'
    },
    {
        "name": "testData2",
        'context': 'krishnudu'
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


                cy.visit("https://shop.demoqa.com/my-account/")
                cy.get("#reg_username").type(this.data.userName)
                // if ((this.data.EmailAddr).contains("@")) {
                cy.get("#reg_email").type(this.data.EmailAddr)
                // }
                // else {
                // let r = (Math.random() + 1).toString(37).substring(7)
                //     cy.get("#reg_email").type(this.data.EmailAddr+ r + '@gmail.com')
                // }   
                cy.get("#reg_password").type(this.data.strongPassword)
                cy.get('button[name="register"]').click()


                // cy.get("#username").should("have.attr", 'value', testData.userName)
                // or
                cy.get("#username").should("have.value", this.data.userName)


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