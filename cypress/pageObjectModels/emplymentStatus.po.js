class employmentStatus{

    addButton(){
        return cy.get( 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
    }

    navigateToEmpStatusPage(){
                //adding "employment status"
                cy.contains("Admin").click()
                cy.contains("Job").click()
                cy.contains("Employment Status").click()
                cy.contains('Add').click()
    }
    employmentInput(){
        let r = (Math.random()+1).toString(36).substring(7)
        return cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type('empstatus'+r)
    }

    submit(){
        return cy.get( 'button[type="submit"]').click()
    }
}

const objEmploymentStatus = new employmentStatus()
export default objEmploymentStatus;