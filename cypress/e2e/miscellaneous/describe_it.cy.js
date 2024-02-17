
 // no Error
it("1. it block", () => { 
    describe ("test suite", () => {

        cy.visit("www.google.com")
        cy.get('#APjFqb').type("india{enter}")

    })
})//===============================================================

 // no Error
it("2. it block", () => {

    cy.visit("www.google.com")
    cy.get('#APjFqb').type("india{enter}")

})//===============================================================

 // Error
describe("test suite", () => {  

    cy.visit("www.google.com")  // must write inside it()
    cy.get('#APjFqb').type("india{enter}")

})

