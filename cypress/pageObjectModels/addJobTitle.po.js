class addJobTitle {

    addButton() {
        cy.contains("Add").click()
    }

    jobTitleInput() {
        let r = (Math.random()+1).toString(36).substring(7)
        return cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type('exports'+r)
    }
    jobDescription() {
        return cy.get('textarea[placeholder="Type description here"]').type("Job Description Description")
    }
    submitButton(){
        return cy.get('button[type="submit"]').click()
    }
    successMessage(){
        return cy.contains("Successfully Saved").should("be.visible")
    }
}

const objAaddJobTitle = new addJobTitle()
export default objAaddJobTitle;