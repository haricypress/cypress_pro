describe("verify files demo ", () => {

    it("method 1: upload file with plugin'", () => {
        /* 
                1) don't upload personal files, upload garbage data file
                2) Note : before run this test case, create a txt file in "fixtures/22_files" folder,
                   with "files1.txt" name 
                3) can upload xml, doc, pdf, ppt.......etc formate files also  
                4) use relative path of file */


        /*
        
        to work this test, follow below steps first:
        
        step 1. install plugin in project folder
        
                    CMD command  :  npm install --save-dev cypress-file-upload
        
        step 2 : paste below statement at "cypress/support/commands.js" file
        
                    import 'cypress-file-upload';
        
        */



        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        // cy.wait(3000)  // waiting 3 sec


        // // 1) to upload single file
        // cy.xpath('//input[@name="upfile"]')
        //     .attachFile('22_files/file1.txt')

        // // 2) to upload single file with variable
        // var file = '22_files/file1.txt'
        // cy.xpath('//input[@name="upfile"]')
        //     .attachFile(file)


        // // 3) to upload multiple files
        // cy.xpath('//input[@name="upfile"]')
        //     .attachFile(['22_files/file1.txt', '22_files/file2.txt'])



        // 4) using variable to pass file locations
        var fileLocation = ['22_files/file1.txt', '22_files/file1.txt']
        cy.xpath('//input[@name="upfile"]')
            .attachFile(fileLocation)



        cy.wait(3000)  // waiting 3 sec
        cy.xpath('//input[@type="submit"]').click()
        cy.contains('File Upload Results').should("be.visible")



    })
    // ==============================================================================================


    it.only("method 2: upload file with build-in JavaScript command'", () => {
        /* 
                1) don't upload personal files, upload garbage data file
                2) Note : before run this test case, create a txt file in "fixtures/22_files" folder,
                   with "files1.txt" name 
                3) can upload xml, doc, pdf, ppt.......etc formate files also  
                4) use complete path of file */

        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        // cy.wait(3000)  // waiting 3 sec


        // // 1) to upload single file
        // var file = 'cypress/fixtures/22_files/file1.txt'
        // cy.xpath('//input[@name="upfile"]')
        //     .selectFile(file)


        // // 2) to upload multiple files
        // cy.xpath('//input[@name="upfile"]').selectFile([
        //     'cypress/fixtures/22_files/file1.txt',
        //     'cypress/fixtures/22_files/file2.txt'])


        
        // 3) using variable to pass file locations
        var fileLocation = ['22_files/file1.txt', '22_files/file2.txt']
        cy.xpath('//input[@name="upfile"]').attachFile(fileLocation)



        // cy.wait(3000)  // waiting 3 sec
        cy.xpath('//input[@type="submit"]').click()
        cy.contains('File Upload Results').should("be.visible")

    })
    // =============================================================================================

})

