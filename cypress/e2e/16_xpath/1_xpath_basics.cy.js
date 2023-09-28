
//calling page object model
import objXpathBasics from "../../pageObjectModels/xpath_basics.po"
import objXpathLoginPage from "../../pageObjectModels/xpathLoginPage.po"
import objXpathDashBoardPage from "../../pageObjectModels/xpathDashBoard.po"

describe('xpath basics', () => {

    it.skip('1. verify absolute xpath', () => {
        //import objXpathBasics from "./1_xpath_basics.po" used

        cy.log('test cases started') //just printing

        //web page open
        objXpathBasics.url()

        // absolute xpath
        objXpathBasics.absoluteXpathUname()
    })
    //============================================================================

    it.skip('2. verify relative xpath', () => {
        // import objXpathBasics from "./1_xpath_basics.po" used
        //web page open
        objXpathBasics.url()

        // relative xpath
        objXpathBasics.relativeXpathUname()
    })
    //============================================================================
    it.skip('3. full text include spaces - xpath', () => {
        

        objXpathLoginPage.orangeHrmUrl()
        objXpathLoginPage.FullText()
    })

    //============================================================================
    it.skip('4. partial text - xpath', () => {
        

        objXpathLoginPage.orangeHrmUrl()
        //below is "partial text - xpath" verify method
        objXpathLoginPage.partialText()

    })
    
    //============================================================================
    it.skip('5. AND logic - xpath', () => {
        
        //web page open
        objXpathLoginPage.orangeHrmUrl()
        // andLogic1 and andLogic2 are 2 ways of "AND logic" verify methods
        objXpathBasics.andLogic1()
        objXpathBasics.andLogic2()
        objXpathLoginPage.button()

    })   
    //============================================================================
    it.skip('6. OR logic - xpath', () => {
        
        //web page open
        objXpathLoginPage.orangeHrmUrl()
        objXpathLoginPage.login()
        //below is "OR logic - xpath" verify method
        objXpathDashBoardPage.displaySearch()

    })
    //============================================================================
    it.skip('7. indexing - xpath', () => {
       
        // syntax : (expression)[1]  or (expression)[2]   or  (expression)[last()]

       //web page open
       objXpathLoginPage.orangeHrmUrl()
       objXpathLoginPage.login()
       cy.contains('Admin').click()
       //below is "prefix - xpath" verify method
       objXpathDashBoardPage.searchIndex()

   })

     //============================================================================
     it.skip('8. parent node to child node - xpath', () => {
        // syntax  :  (expression)/child node
        //web page open
        objXpathLoginPage.orangeHrmUrl()
        objXpathLoginPage.login()
        cy.contains('Admin').click()
        //below is "parent node to child node - xpath" verify method
        objXpathDashBoardPage.parentToChildNode()

    })
   //============================================================================
   it.skip('9. child node to parent node - xpath', () => {
    
    //   syntax  :  (expression)/..
    
    //web page open
    objXpathLoginPage.orangeHrmUrl()
    objXpathLoginPage.login()
    //below is "parent node to child node - xpath" verify method
    objXpathDashBoardPage.childToParent()

})
//============================================================================
it('10. child node to parent node - xpath', () => {
    
    //web page open
    objXpathLoginPage.orangeHrmUrl()
    objXpathLoginPage.login()
    //below is "parent node to child node - xpath" verify method
    objXpathDashBoardPage.childToParent()

})


})