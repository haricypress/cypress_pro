class excelToJsonAddJobTitle {

    // addButton() {
    //     cy.contains('Add').click()
    // }

    jobTitleInput(jobTitle) {
        
        return cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type(jobTitle)
    }
    jobDescription(Desc) {
        return cy.get('textarea[placeholder="Type description here"]').type(Desc)
    }
    submitButton(){
        return cy.get('button[type="submit"]').click()
    }
    successMessage(){
        return cy.contains("Successfully Saved").should("be.visible")
    }
}

const objexcelToJsonAddJobTitle = new excelToJsonAddJobTitle()
export default objexcelToJsonAddJobTitle;