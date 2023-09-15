describe("aliasing", () => {

    beforeEach(() => {
        //cy.visit('https://bit.ly/3vswFBe')
        // both are same websites 
        cy.visit('https://form-devs.s3.eu-central-1.amazonaws.com/formulario.html')

    })
  
    it('1. verifying aliasing', () => {

        // =================== verifying total checkboxes are 7 or not  =================
        cy.xpath('//input[@type="checkbox"]').should('have.length', 7)

        // ===================  creating alias  ========================================
        cy.xpath('//input[@type="checkbox"]').as('checkboxes')
        cy.xpath('//input[@type="checkbox"]').first().as('firstcheckbox')
        cy.xpath('//input[@type="checkbox"]').last().as('lastcheckbox')

        // ===================  checking all checkboxes  =================================
        cy.get('@checkboxes').check()

        // =================== verifying all checkboxes are checked or not  ==============

        // 1st method to verify checked  or not
        // cy.get('@checkboxes').check().should('be.checked')

        // 2nd method to verify checked or not
        cy.get('@checkboxes').each(checkbox => {
                expect(checkbox[0].checked).to.equal(true)
            })
        
        //     ===================  unchecking all checkboxes  =================================
        cy.get('@checkboxes').uncheck()

        // ====================  verifying all checkboxes are unckecked or not  ===========       

        // 1st method to verify unchecked or not
        // cy.get('@checkboxes').uncheck().should('be.not.checked')

        // 2nd method to verify unchecked or not
        cy.get('@checkboxes')
            .each(checkbox => {
                expect(checkbox[0].checked).to.equal(false)
            })
        //      ===================  checking "first" and "last" checkboxes  ==================
        cy.get('@firstcheckbox').check()
        cy.get('@lastcheckbox').check()
    })

})