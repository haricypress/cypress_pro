class addJobTitleWithInput {

    addButton() {
        cy.contains("Add").click()
    }

    jobTitleInput(jobTitle) {
        let r = (Math.random()+1).toString(36).substring(7)
        return cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type(jobTitle+r)
    }
    jobDescription(Description) {
        return cy.get('textarea[placeholder="Type description here"]').type(Description)
    }
    submitButton(){
        return cy.get('button[type="submit"]').click()
    }
    successMessage(){
        return cy.contains("Successfully Saved").should("be.visible")
    }
}

const objaddJobTitleWithInput = new addJobTitleWithInput()
export default objaddJobTitleWithInput;