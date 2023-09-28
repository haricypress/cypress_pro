
import objfirstLastEq from "../../pageObjectModels/firstLastEq.cy.po"

describe("verify first()   last()   eq() methods", () => {

    it("1. verify first() methods", () => {
        // opens rediff register  web page
        objfirstLastEq.url()
        objfirstLastEq.firstCommand()
        cy.wait(5000)
    })

    it("2. verify eq() methods", () => {
        // opens rediff register  web page
        objfirstLastEq.url()
        objfirstLastEq.eqCommand()
        cy.wait(5000)
    })

    it("3. verify last() methods", () => {
        // open web page
        objfirstLastEq.url()
        objfirstLastEq.lastCommand()
        cy.wait(5000)
    })

})