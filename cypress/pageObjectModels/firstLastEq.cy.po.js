class firstLastEq {

    url() {
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
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
