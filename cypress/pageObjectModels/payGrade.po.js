class payGrade {

    addButton() {
        return cy.get( 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    }
    payGradeInput() {
        let r = (Math.random()+1).toString(36).substring(7)
        return cy.get( 'input[class="oxd-input oxd-input--active"]').eq(1).type('payGrage '+r)
    }
    submit() {
        return cy.get( 'button[type="submit"]').click()
    }
    successMessage(){
        return cy.contains("Info") //sometines it is comming
        // return cy.contains("Success")
        
    }
    submitPayGrade(){
        let r = (Math.random()+1).toString(36).substring(7)
        cy.get( 'input[class="oxd-input oxd-input--active"]').eq(1).type('payGrage '+r)
        cy.get( 'button[type="submit"]').click()

    }
}

const objPayGrade = new payGrade()
export default objPayGrade;