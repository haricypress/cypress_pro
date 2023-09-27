class addEmployee {

    PIMclick() {

        cy.contains("PIM").click()
    }

    addEmployeeClick() {
        cy.contains("Add Employee").click()
    }

    firstName() {
        return cy.xpath('//input[@name="firstName"]')
    }
    lastName() {
        return cy.xpath('//input[@name="lastName"]')
    }
    saveButton() {
        cy.xpath('//button[@type="submit"]').click()
    }
    successMessage() {
        cy.contains("Successfully").should("be.visible")
    }
    required() {
        cy.contains("Required").should("be.visible")
    }
}

const objaddEmployee = new addEmployee()
export default objaddEmployee