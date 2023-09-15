class axesMethods {

    url() {
        cy.visit('https://www.apsrtconline.in/oprs-web/guest/home.do?h=1')
    }
    followingAll() {

        //  find within node,        /following::
        //  syntax 1   :  expression/following::expression or tagname

        //  find all similar following nodes,     //following::
        //  syntax 2   :  expression//following::expression or tagname


        return cy.xpath('//input[@name="startPlaceId"]//following::input')
    }
    ancestor() {
        // find all parent tags
        //  syntax  :  expresion/ancestor::expression or tag_name



        return cy.xpath('//input[@name="searchBtn"]//ancestor::div')
    }
    followingSibling() {
        // find all sibling tags
        // syntax   :  expression/following-sibling::Expression  or tag_name

        return cy.xpath('//input[@name="destination"]/following-sibling::input')
    }
    preceding() {
        // find first level parent and grand parent nodes only
        // syntax   :  expression/preceding::Expression  or tag_name

        return cy.xpath('//input[@name="destination"]/preceding::input')
    }

}
const objAxesMethods = new axesMethods()
export default objAxesMethods