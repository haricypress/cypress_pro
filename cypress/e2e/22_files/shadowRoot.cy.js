describe("shadow Root", () => {

    it('verify access elements under shadow root ', () => {

        cy.visit('http://watir.com/examples/shadow_dom.html')


        // Error - below textbox under shadow root - can't access in normal way
        // cy.get('input[type="text"]').type('cypress')


        // shadow elements can access with "shadow()" command
        // "shadow_host" is "id" name
        cy.get('#shadow_host').shadow().find('input[type="text"]').type('cypress')  // textbox
        cy.get('#shadow_host').shadow().find('input[type=checkbox]').uncheck()  //  checkbox
        cy.wait(2000)
        
        // same above shadow elements
        cy.get('#shadow_host').shadow().find('[type="text"]').type('cypress')  // textbox
        cy.get('#shadow_host').shadow().find('[type=checkbox]').check()  //  checkbox
        

    })
})