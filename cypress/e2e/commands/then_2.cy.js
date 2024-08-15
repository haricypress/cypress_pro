describe("then demo", () => {
    it("test case on then commnad", () => {

        cy.visit("https://ecommerce-playground.lambdatest.io/")
        
        cy.get("#main-navigation>div>div>div>nav>div>ul>li>a").then(list => {

            cy.log(list.text())
        })

    })

    it.only("test case on then commnad", () => {

        cy.fixture("testData").then(details => {
            cy.log(details)

        })

    })
})