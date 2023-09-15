
// this page object model (POM) included in "cypress\e2e\16_xpath\1_xpath_basics.cy.js"

class xpathBasics
//
 {

    url() {
        cy.visit('https://shop.demoqa.com/my-account/')
    }
    //=============================================================================================================

    //absolute xpath
    absoluteXpathUname() {
        cy.xpath('/html/body/div[1]/div[2]/main/article/div/div/div[2]/div[2]/form/p[1]/input').type("cypress")
    }
    //=============================================================================================================

    // relative xpath
    // clear() command used to clear the text box
    relativeXpathUname() {
        cy.xpath('//input[@id="reg_username"]').clear().type("cypress")
    }
    //=============================================================================================================

    // relative xpath
    // clear() command used to clear the text box
    relativeXpathUname() {
        cy.xpath('//input[@id="reg_username"]').clear().type("cypress")
    }
    andLogic1() {
        //username and password text boxes
        return cy.xpath('//input[@name="username"][@placeholder="Username"]').type('Admin')
    }
    andLogic2() {

        return cy.xpath('//input[@name="password" and @placeholder="Password"]').type('admin123')
    }
    orLogic(){
        return cy.xpath('//input[@name="password" or @placeholder="Password"]').type('admin123')
    }
}


const objXpathBasics = new xpathBasics()
export default objXpathBasics