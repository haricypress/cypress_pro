class jobCategory {

    addButton() {
        return 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'.click()
    }
    jobCategoryInput() {
        let r = (Math.random()+1).toString(36).substring(6)
        return cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type('jobCategpory '+r)
    }
    submit() {
        return cy.get('button[type="submit"]').click()
    }
    successfullyMessage() {
        return cy.contains('Successfully Saved').should("be.visible")
    }
}
const objJobCategory = new jobCategory()
export default objJobCategory;