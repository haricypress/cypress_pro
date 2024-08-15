describe('Find links on web page', () => {

    it('licking on hiddden menu option', () => {

        cy.visit('https://www.cypress.io/')

        // cy.contains("Docs").find('API')  // Error - it is hidden element

        // ================== way 1 =========================
        // cy.contains("API").click({force: true})  // to click on hidden menu option

        // ================== way 2 =========================

        cy.contains('API')
            .should('be.hidden')

        cy.contains('API').invoke('show').should('be.visible')


        cy.contains("Docs").find('API').invoke("removeAttr", "target").click()

    })
})