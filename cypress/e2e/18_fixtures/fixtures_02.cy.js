describe("loading test data from fixtures", () => {

    it("1. test datad load from fixtured folder", () => {

        cy.fixture("testData/login").then((login_details) => {

        
            cy.visit("https://opensource-demo.orangehrmlive.com")

            cy.xpath('//input[@name="username"]').type(login_details.username)
            cy.xpath('//input[@name="password"]').type(login_details.password)
            cy.xpath('//button[@type="submit"]').click()
   
            cy.contains("Dashboard").should("be.visible")  // assertion

        })
    })

    it("2. test datad load from fixtured folder", () => {

        cy.fixture("testData/login").then((login_details) => {

            cy.visit("https://opensource-demo.orangehrmlive.com")

            cy.xpath('//input[@name="username"]').type(login_details.username)
            cy.xpath('//input[@name="password"]').type(login_details.password)
            cy.xpath('//button[@type="submit"]').click()
   
            cy.contains("Dashboard").should("be.visible")  // assertion

        })
    })

})