
//calling page object model
import objCSSBasics from "../../pageObjectModels/CSS1_basics.po"

describe('CSS basics', () => {

    it('1. verify CSS basic syntax', () => {
        cy.log('test cases started') //just printing

        //web page open "shop.demoqa" web page
        objCSSBasics.url2()

        // CSS basic syntax
        objCSSBasics.CSSbasicSyntax()
        // cy.wait(10000) // waiting 10 sec, works on "it" run tester only
    })
    //============================================================================
    it('2. AND logic - CSS', () => {
        //web page open "shop.demoqa" web page
        objCSSBasics.url()
        // andLogic1 and andLogic2 are 2 ways of "AND logic" verify methods
        objCSSBasics.andLogic()

    })
    //============================================================================

    it('3. parent to child', () => {
        // web page open "orangeHRm" web page
        objCSSBasics.url2()
        objCSSBasics.parentTochild()
        // cy.wait(5000)
    })

    it('4. child to parent', () => {
        // web page open "orangeHRm" web page
        objCSSBasics.url2()
        objCSSBasics.childToParent()
        
    })

    it('5. goto sibling node', () => {
        // web page open "orangeHRm" web page
        objCSSBasics.url2()
        objCSSBasics.siblingNode()
    })


})