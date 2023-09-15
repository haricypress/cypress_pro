
class xpathLoginPage {

    // ----------------upto login--------------

    orangeHrmUrl() {
        return cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
    
    FullText(){
        return cy.xpath('//p[text()="Forgot your password? "]')
    }
    partialText(){
        return cy.xpath('//p[contains(.,"Forgot your")]')
    }
    credentialUname() {
        return cy.xpath('//input[@placeholder="Username"]').type('Admin')
    }
    credentialPwd() {
        return cy.xpath('//input[@placeholder="Password"]').type('admin123')
    }

    leaveText(){
        cy.xpath('//span[text()="Leave"]').click()
    }
    
    button() {
        return cy.xpath('//button[@type="submit"]').click()
    }


    login(){
        
        this.orangeHrmUrl()
        this.credentialUname()
        this.credentialPwd()
        this.button()
    }
}

const objXpathLoginPage = new xpathLoginPage()
export default objXpathLoginPage;