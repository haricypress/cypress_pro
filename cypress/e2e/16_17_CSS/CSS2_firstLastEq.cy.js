
import objfirstLastEq from "../../pageObjectModels/CSS2_firstLastEq.po"

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

    
    it('4. #ID_name - CSS', () => {
        //Syntax : #ID_Name
        //web page open "shop.demoqa" web page
        objfirstLastEq.url()
        // 4) #ID_name atribute using to find element
        objfirstLastEq.IDAttribute()


    })

    it('5. class attribute - CSS', () => {
        //Syntax :    .class_name
        //web page open "shop.demoqa" web page
        objfirstLastEq.url2()
        // 5) .class using, if any element has class tag in node
        objfirstLastEq.singleClassValuedAttribue()

        
    })
    it('6. multiple class values in class atribite', () => {
        objfirstLastEq.url2()
        // 6) .classvalue1.clasvalue2.classvalue3, if any element has multiple values in "class" attribue
        objfirstLastEq.multipleClassValuedAttribute()
    })

    it('7. full / partial text include spaces - CSS', () => {
        //web page open "shop.demoqa" web page
        objCSSBasics.url2()
        objCSSBasics.CypressText()
    })


})