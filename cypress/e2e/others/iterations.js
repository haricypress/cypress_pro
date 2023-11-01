describe("iteration", () => {

    it("diff ways in loops, cy.wrap() usage", function () {
        var login_details = ["a","b","C"]
        for (const i in login_details) {
            cy.log(login_details[i])
        }// ========================================================

        for (const i of login_details) {
            cy.log(login_details[i])
        }// ========================================================

        // for arrays
        login_details.forEach((val, index, values)=>{
            cy.log(val, index,values)
        })// ========================================================

        cy.wrap(login_details).each(function(values){
            cy.log(values)
        })// ========================================================

        login_details = "dsdsdsd'"
        cy.wrap(login_details).each((values)=>{
            cy.log(values)
        })// ========================================================
    })
})