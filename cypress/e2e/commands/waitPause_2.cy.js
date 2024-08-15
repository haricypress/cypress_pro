
cy.on("uncaught:exception", ()=>{
    return false
})
describe("verify wait and pause commands", () => {

    it("", () => {
        
        cy.visit("https://ecommerce-playground.lambdatest.io/")

        cy.wait(3000)
        cy.contains(" Mega Menu").trigger("mouseover")
        cy.log("click on resume button above time travel feature")

        
        cy.pause()
        cy.contains("Blog").click({force:true})
        
    })
})