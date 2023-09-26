class addEmployee {

    PIMclick() {

        cy.contains("PIM").click()
    }

    addEmployeeClick() {
        cy.contains("Add Employee").click()
    }

    firstName() {
        cy.xpath('//input[name="firstName"]')
    }
    lastName() {
        cy.xpath('//input[name="lastName"]')
    }
    savaButton() {
        cy.xpath('button[type="submit"]').click()
    }
    successMessage() {
        cy.contains("success").should("be.visible")
    }
    errorMessage() {
        cy.contains("Error").should("be.visible")
    }
}

const objaddEmployee = new addEmployee()
export default objaddEmployee