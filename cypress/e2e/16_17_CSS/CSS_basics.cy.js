
//calling page object model
import objCSSBasics from "../../pageObjectModels/CSS_basics.po"

describe('CSS basics', () => {

    it('1. verify CSS basic syntax', () => {
        cy.log('test cases started') //just printing

        //web page open "shop.demoqa" web page
        objCSSBasics.url()

        // CSS basic syntax
        objCSSBasics.CSSbasicSyntax()
        // cy.wait(10000) // waiting 10 sec, works on "it" run tester only
    })
    //============================================================================

    it('2. full / partial text include spaces - CSS', () => {
        //web page open "shop.demoqa" web page
        objCSSBasics.url()
        objCSSBasics.CSSText()
    })


    //============================================================================
    it('3. AND logic - CSS', () => {
        //web page open "shop.demoqa" web page
        objCSSBasics.url()
        // andLogic1 and andLogic2 are 2 ways of "AND logic" verify methods
        objCSSBasics.andLogic()

    })
    //============================================================================

    it('4. #ID_name - CSS', () => {
        //Syntax : #ID_Name
        //web page open "shop.demoqa" web page
        objCSSBasics.url()
        // 4) #ID_name atribute using to find element
        objCSSBasics.IDAttribute()


    })

    it('5. class attribute - CSS', () => {
        //Syntax :    .class_name
        //web page open "shop.demoqa" web page
        objCSSBasics.url()
        // 5) .class using, if any element has class tag in node
        objCSSBasics.singleClassValuedAttribue()


    })
    it('6. multiple class values in class tribite', () => {
        objCSSBasics.url()
        // 6) .classvalue1.clasvalue2.classvalue3, if any element has multiple values in "class" attribue
        objCSSBasics.multipleClassValuedAttribute()
    })

    it('7. parent to child', () => {
        // web page open "orangeHRm" web page
        objCSSBasics.url2()
        objCSSBasics.parentTochild()
        // cy.wait(5000)
    })

    it('8. child to parent', () => {
        // web page open "orangeHRm" web page
        objCSSBasics.url2()
        objCSSBasics.childToParent()
        
    })

    it('9. goto sibling node', () => {
        // web page open "orangeHRm" web page
        objCSSBasics.url2()
        objCSSBasics.siblingNode()
    })


})