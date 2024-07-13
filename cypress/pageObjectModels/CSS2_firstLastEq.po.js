class firstLastEq {

    url() {
        cy.visit('https://register.rediff.com/register/register.php')
    }

    url2() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    
    IDAttribute() {
        // 4) #ID always unique, so, can find elements uniquely in a webpage
        // can use 2 ways

        // 1st way
        // return cy.get('input[id="newpasswd1"]').type('cypress')

        // 2nd way
        return cy.get('#newpasswd1').type('cypress')


    }

    singleClassValuedAttribue() {

        // 5) .class using, if any element has class tag in node
        return cy.get('.orangehrm-login-layout')
    }

    multipleClassValuedAttribute() {
        // 6) .classvalue1.clasvalue2.classvalue3, if any element has multiple values in "class" attribute

        // Note: search in DOM can find string, selector and xpath,
        //       if search for "class" , it will search "class" in attribue as well as in string, selector, xpath

        return cy.get(".oxd-input.oxd-input--active").eq(1)

    }
    //=============================================================================================================
    // 2) text search is not available in CSS, "contains()" using, it is cypress command
    //    works for full and partial text

    CypressText() {
        // not possible in CSS, contains() - cypress method, using for this
        return cy.contains("Username")

    }
    
    firstCommand() {
        // first() - cypress command
        return cy.get('input[type="text"]').first().type('full name')  //full name text box


    }
    lastCommand() {
        // last() - cypress command
        return cy.get('input[type="text"]').last().type('capcha')  // capcha textbox
     }
    eqCommand() {
        // eq() - cypress command
        cy.get('input[type="text"]').eq(1).type("Email")  // for Email textbox
        return cy.get('input[type="text"]').eq(2).type('alternative-Email')  // for alternative-Email textbox
    }
}

const objfirstLastEq = new firstLastEq()
export default objfirstLastEq
