
/*

intro : 

"cy.exec()"  executes system commands in terminal, files of outside project can also access
Don't try with web server
"cy.exec()"  has 3 properties    :     code, stdout, stderr

================================================================================================


below scripts at "package.json" file :

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "run_js": "node cypress/e2e/023_/4_excelToJson.js",
    "o" : "npx cypress open"

  },


==================================================================================================
*/

describe('verify cy.exec() test cases', () => {

    it('1. verifying cy.exec() executes JS script file', () => {

        cy.exec("node cypress/e2e/023_/4_excelToJson.js")  //it will execute "js" script file

    })

    // ======================================================================================

    it('2. verifying cy.exec() with property code : "0"  ', () => {

        // property code : "0" means success, so, checking is it "0" or not
        cy.exec("node cypress/e2e/023_/4_excelToJson.js").its('code').should('eq', 0)

    })
    // ======================================================================================

    it.only('3. verify cy.exec() will executes script from "package.json" or not', () => {

        // executes script from "package.json" file by "npm run <script name>"

        //will execute "run_js" script from "package.json" file
        cy.exec("npm run run_js")

        //will execute "o" script from "package.json" file, hear "o" is script name
        // cy.exec("npm run o")
    })
})