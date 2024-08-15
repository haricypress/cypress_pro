describe("files demo", () => {

    // ======================  write file test cases  ==================

    it("text file - create and overwrite", () => {

        cy.writeFile('cypress/fileDemo/writeFileDemo.txt', "hari kishore")
    })
    // // =======================================================================
    it("text file - create and append", () => {

        cy.writeFile('cypress/filesDemo/writeFileDemo.txt', "append hari kishore\n", { flag: 'a+' })

        /*    "/n" = new line
              "{ flag: 'a+' }"  =  append to file /  add extra to file */
    })
    // // =======================================================================
    it("json file - create and overwrite", () => {

        cy.writeFile("cypress/fileDemo/writeFileDemo.json",
            { 'firstName': 'hari', 'lastName': 'kishore' },)
    })
    // // =======================================================================
    it("json file - create and uppend", () => {

        cy.writeFile("cypress/fileDemo/writeFileDemo.json",
            { 'firstName': 'hari', 'lastName': 'kishore' },{ flag: 'a+' })
    })


    
    // ================= read file test cases ============================================

    it("read - josn file", () => {

        cy.readFile("cypress/fileDemo/writeFileDemo.json").should("exist")
        cy.readFile("cypress/fileDemo/writeFileDemo.json").its('firstName').should('eq', 'hari')
        cy.readFile("cypress/fileDemo/writeFileDemo.json").its('lastName').should('eq', 'kishore')
    })

    // =======================================================================

    it("read - txt file", () => {

    cy.readFile("cypress/fileDemo/writeFileDemo.txt").should('contain','hari kishore')
    })

})