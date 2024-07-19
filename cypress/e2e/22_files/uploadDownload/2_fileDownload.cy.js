describe('download file demo', () => {

    /*
 
        to work these tests, follow below steps :
 
        step 1. install plugin in project folder
 
                    CMD command  :  npm install cypress-downloadfile
 
        step 2 : paste below statement at "cypress/support/commands.js" file
 
                    require('cypress-downloadfile/lib/downloadFileCommand')
 
 
        step 3 : if cypress version above 10,
                 Add below lines in "cypress.config.js"  file
 
                        const { defineConfig } = require('cypress')
 
                        //================== 1. add below line ===========================
                        const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
 
                        module.exports = defineConfig({
                        // setupNodeEvents can be defined in either
                        // the e2e or component configuration
                        e2e: {
                            setupNodeEvents(on, config) {
 
                                //====================== 2. add below line ===============
                                on('task', {downloadFile})
                            })
                            }
                          }
                        })
 
 
        step 4 ( optional )   :   if this plugin not work paste below statement at top of script
 
            /// <reference types="cypress-downloadfile"/>
 
 
 
        */


    it('1. download file with "cypress-downloadfile" plugin', () => {

        // if another file already exist with same name, it replaces
        cy.downloadFile('https://www.tajmahal.gov.in/images/nightview.jpg', 'cypress/downloads', 'tajmahal.jpg')
        cy.readFile('cypress/downloads/tajmahal.jpg').should('exist')
    })

    // ============================================================================


    it('2. ramdomly generating downloaded file name  -  "cypress-downloadfile" plugin', () => {

        // every time new name is generating. so, file will not replace

        let r = (Math.random() + 1).toString(36).substring(7)

        cy.downloadFile('https://www.tajmahal.gov.in/images/nightview.jpg', 'cypress/downloads', 'tajmahal' + r + '.jpg')
        cy.readFile('cypress/downloads/tajmahal' + r + '.jpg').should('exist')
    })

    // ============================================================================

    it('3. variable using for downloaded file name  -  "cypress-downloadfile" plugin', () => {

        // every time new name is generating. so, file will not replace

        let r = (Math.random() + 1).toString(36).substring(7)
        let downloadedFile = 'tajmahal' + r +'.jpg'

        cy.downloadFile('https://www.tajmahal.gov.in/images/nightview.jpg', 'cypress/downloads', downloadedFile)
        cy.readFile('cypress/downloads/'+ downloadedFile).should('exist')
    })

    // ============================================================================

    it('4. downloading in "hari" folder -  "cypress-downloadfile" plugin', () => {

        // every time new name is generating. so, file will not replace

        let r = (Math.random() + 1).toString(36).substring(7)
        let downloadedFile = 'tajmahal' + r +'.jpg'

        cy.downloadFile('https://www.tajmahal.gov.in/images/nightview.jpg', 'cypress/downloads/hari', downloadedFile)
        cy.readFile('cypress/downloads/hari/'+ downloadedFile).should('exist')
    })

})


    // ================================================================================================================
