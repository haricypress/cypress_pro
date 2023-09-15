describe("verify files demo ", () => {

    it("method 1: upload file with plgin'", () => {
        /* 
                1) don't upload personal files, upload garbage data file
                2) Note : before run this test case, create a txt file in "fixtures/22_files" folder,
                   with "files1.txt" name 
                3) can upload xml, doc, pdf, ppt.......etc formate files also  
                4) use relative path of file */

        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        // cy.wait(3000)  // waiting 3 sec


        // 1) to upload single file
        // cy.xpath('//input[@name="upfile"]')
        //     .attachFile('22_files/file1.txt')


        // 2) to upload multiple files
        // cy.xpath('//input[@name="upfile"]')
        // .attachFile(['22_files/file1.txt', '22_files/file1.pdf'])


        /*
        // 3) using variable to pass file locations
        fileLocation = ['22_files/file1.txt', '22_files/file1.pdf']   // can't pass as variable
        cy.xpath('//input[@name="upfile"]')
        .attachFile(fileLocation)*/



        // cy.wait(3000)  // waiting 3 sec
        cy.xpath('//input[@type="submit"]').click()
        cy.contains('File Upload Results').should("be.visible")



        /*
        
        to work this test, follow below steps first:
        
        step 1. install plugin in project folder
        
                    CMD command  :  npm install --save-dev cypress-file-upload
        
        step 2 : paste below statement at "cypress/support/commands.js" file
        
                    import 'cypress-file-upload';
        
        */



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


        // 1) to upload single file
        cy.xpath('//input[@name="upfile"]')
        .selectFile('D:/cypress_pro/cypress/fixtures/22_files/file1.txt')


        // 2) to upload multiple files
        // cy.xpath('//input[@name="upfile"]').selectFile([
        //     'D:/cypress_pro/cypress/fixtures/22_files/file1.txt',
        //     'D:/cypress_pro/cypress/fixtures/22_files/file1.pdf'])


        /*
        // 3) using variable to pass file locations
        fileLocation = ['22_files/file1.txt', '22_files/file1.pdf']   // can't pass as variable
        cy.xpath('//input[@name="upfile"]').attachFile(fileLocation)*/



        // cy.wait(3000)  // waiting 3 sec
        cy.xpath('//input[@type="submit"]').click()
        cy.contains('File Upload Results').should("be.visible")

    })
// =============================================================================================

})

