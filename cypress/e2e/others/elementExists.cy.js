describe('verifying element', () => {

    it('verifying element exists / not', () => {

        cy.visit("https://github.com/cypress-io/cypress/issues/25578")
        cy.get('body').then(($body) => {

            //if element available
            if ($body.find('input[type="hidden"][class="js-site-search-type-field"]').length > 0) {
                cy.log("element available")
            }
            else {
                cy.log("element not available")
            }


            //if element not available
            if ($body.find('input[type="hidden"][class="js-site-search-ype-field"]').length > 0) {
                cy.log("element available")
            }
            else {
                cy.log("element not available")
            }
        })
    })
})