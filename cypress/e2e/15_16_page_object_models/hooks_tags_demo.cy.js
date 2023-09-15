/*

if only "it.skip" using, all are testing except that given tests
if only "it.only" using, those are testing and remaining are skipping
if both "it.only"  and "it.skip" are using, "it.only" are testing , remainig all are skipping

if first test case skipped by "it.skip" then "before" hook not executing
if  last test case skipped by "it.skip" then "after"  hook not executing

*/


import objLoginPage from "../../pageObjectModels/loginPage.po"

describe('orange hrm login', () => {

    beforeEach('launch orange HRM url', () => {
        cy.log('web page opening')
        cy.visit(objLoginPage.orangeHrmUrl())

    })

    afterEach('click on submit button', () => {
        cy.log("test completed")

    })
    before('before hook testing', () => {
        cy.log('all tests are starting')

    })
    after('after hook testing', () => {
        cy.log('all tests are completed')

    })
    it.skip('1 : correct username - correct password', () => {

        cy.get('input').eq(1).type(objLoginPage.credentialUname())
        cy.get('input').eq(2).type(objLoginPage.credentialPwd())

        cy.get(objLoginPage.button()).click()
        cy.contains(objLoginPage.shouldBeVisible()).should(`be.visible`)

    })
    it('2 : wrong username - correct password', () => {

        cy.get('input').eq(1).type(objLoginPage.wrongCredentialUsername)
        objLoginPage.credentialPwd()


        cy.get(objLoginPage.button())
        cy.contains(objLoginPage.invalidVisibleMessage()).should(`be.visible`)
    })

    it('3 : correct username - wrong password', () => {

        objLoginPage.credentialUname()
        cy.get('input').eq(2).type(objLoginPage.wrongCredentialPwd())


        cy.get(objLoginPage.button())
        cy.contains(objLoginPage.invalidVisibleMessage()).should(`be.visible`)

    })

    it('4 : wrong username - wrong password', () => {


        cy.get('input').eq(1).type(objLoginPage.wrongCredentialUsername)
        cy.get('input').eq(2).type(objLoginPage.wrongCredentialPwd())


        objLoginPage.button()
        cy.contains(objLoginPage.invalidVisibleMessage()).should(`be.visible`)

    })
})

