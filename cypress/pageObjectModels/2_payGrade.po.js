class payGrade {

    displayDashBoardText(){
        return "Dashboard"
    } 
    payGradeInput() {
        return cy.get( 'input[class="oxd-input oxd-input--active"]').eq(1)
    }
    submit() {
        return cy.get( 'button[type="submit"]')
    }
    successMessage(){
        return cy.contains("Info") //sometines it is comming
        // return cy.contains("Success")
        
    } 
}

const objPayGrade = new payGrade()
export default objPayGrade;