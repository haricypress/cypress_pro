import objAxesMethods from "../../pageObjectModels/axesMethods.po"

describe('axes following - xpath', () => {
    it('1. folllowing - xpath', () => {

        //  find within node,        /following::
        //  syntax 1   :  expression/following::expression or tagname

        //  find all similar following nodes,     //following::
        //  syntax 2   :  expression//following::expression or tagname


        objAxesMethods.url()
        // getting all following similar nodes
        objAxesMethods.followingAll()
    })
    it('2. ancestor - xpath', () => {
        // find all parent tags
        //  syntax  :  expresion/ancestor::expression or tag_name


        objAxesMethods.url()
        objAxesMethods.ancestor()
    })
    it('3. following-sibling - xpath', () => {

        // find all sibling tags
        // syntax   :  expression/following-sibling::Expression  or tag_name
        objAxesMethods.url()
        // getting all sibling nodes
        objAxesMethods.followingSibling()
    })

    it('4. preceding - xpath', () => {

         // find first level parent and grand parent nodes only
        // syntax   :  expression/preceding::Expression  or tag_name

        objAxesMethods.url()
        // getting all sibling nodes
        objAxesMethods.preceding()
    })



})