

describe("verifying view port", () => {


    it("verify viewport", () => {

        cy.visit('https://ecommerce-playground.lambdatest.io/')

        cy.get('ul[class="navbar-nav horizontal"]>li>a').each(list =>{

            cy.log(list.text())
        })
    })

})