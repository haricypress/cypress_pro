

describe('verify text file read - diff ways', () => {
    /* in cypress, can read these extension files.
    .json, .js, .coffee, .html, .txt, .csv, .png, .jpg, .jpeg, .gif, .tif, .tiff, .zip */

    it('1. read text file and split by comma ( , )', () => {

        cy.fixture("API.txt").then((data) => {

            // no need mention "," after last word in text file
             // automatically trimming front and rare
            data = data.split(",")
            data.forEach((value) => {
                cy.log(value)

            })// forEach
        })// fixture
    })// it ================================================== =================================

    it('2. read text file and split by "new line" ', () => {
        cy.fixture("API.txt").then((data) => {

            data = data.split("\n")
            data.forEach((value) => {
                cy.log(value)

            })// forEach
        })// fixture
    })// it ===================================================================================


    it('3. read text file and split by "single space" ', () => {
        cy.fixture("API.txt").then((data) => {

            // automatically "new line" accepting
            data = data.split(" ")
            data.forEach((value) => {
                cy.log(value)

            })// forEach
        })// fixture
    })// it ===================================================================================


    it('4. read text file and split by empty', () => {
        cy.fixture("API.txt").then((data) => {

            // 2 times printing "empty line" for every new line
            data = data.split("")
            data.forEach((value) => {
                cy.log(value)

            })// forEach
        })// fixture
    })// it ===================================================================================

})// describe
