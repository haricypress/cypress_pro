
describe("TS1", () => {

    beforeEach("before", function () {
        cy.log(this.data)
        this.data = 1
        cy.log(this.data)
  
    })

    it("TC1", function () {
        cy.log(this.data)
        this.data = 2
        cy.log(this.data)
        cy.wait(10000) // working in run and open modes
        // cy.pause()  // working in open mode only
  
    })

    it("TC2", function () {
        cy.log(this.data)
        this.data = 3
        cy.log(this.data)
    })
    
    it("TC3", function () {
        cy.log(this.data)
        this.data = 4
        cy.log(this.data)
    })
})
