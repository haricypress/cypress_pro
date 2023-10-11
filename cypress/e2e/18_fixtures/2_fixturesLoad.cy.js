
describe("fixtures demo", function () {

    before(function () {  // hook  -  "before"

        cy.fixture("shop.demoqa").then(function (data) {
            this.data = data
        })
    })

    it("1. verify submit button disabled or not - weak password", function () {

        cy.visit("https://shop.demoqa.com/my-account/")
        cy.get("#reg_username").type(this.data.userName)
        cy.get("#reg_email").type(this.data.EmailAddr)
        cy.get("#reg_password").type(this.data.weakpassword)

        // cy.get('button[name="register"]').should("be.disabled")
        //or
        // cy.wait(10000)  // waiting for 10 sec, some times web page to disable button taking long time
        cy.get('button[name="register"]').should("have.attr", "disabled", "disabled")

    })



    /*
    
    test data file location      :      cypress\fixtures\shop.demoqa.json
    
    
    {
       "userName"       : "kishore",
       "EmailAddr"     : "kishore@gmail.com",
       "weakpassword"   : "dsdsd",
       "strongPassword" : "xfsgfxvxffxgvcx"
    }
    
    
    Note:  in load data technique, you can't find test data file location
    
    */


})