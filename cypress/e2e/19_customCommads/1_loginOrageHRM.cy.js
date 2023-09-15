
import obj_displayDashBoard from "./1_loginOrageHRM.po"

describe('verify custom commands', () => {

    it('verify custom login command without parameters', () => {

        //login
        cy.orangeMRHlogin1() // this is custom command
        cy.contains(obj_displayDashBoard.Dashboard).should("be.visible")  //  this is POM

    })

})
