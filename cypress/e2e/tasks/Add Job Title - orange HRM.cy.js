describe('verify to Add Job Title', () => {
  it('verify to Add Job Title', () => {


    //web page open
    cy.visit("web/index.php/auth/login")
 

    //navigate to "job title" page
    cy.get('input').eq(1).type(Cypress.env('username'))
    cy.get('input').eq(2).type(Cypress.env('password'))
    cy.get("button").click()
    cy.contains("Dashboard").should(`be.visible`)


    //adding "job title"
    cy.contains("Admin").click()
    cy.contains("Job").click()
    cy.contains("Job Titles").click()
    cy.contains('Add').click()


    //entering job title details      Note : job title is always unique
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type("Tjkbjhhgj")
    cy.get('textarea[placeholder="Type description here"]').type("Job Description Description")
    cy.get('textarea[placeholder="Add note"]').type("Note For Job Title")
    cy.get('button[type="submit"]').click()
    cy.contains("Successfully Saved").should("be.visible")


  })
})

