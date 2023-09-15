describe('rediff', () => {

  it('1. typing with any special character in 1st textbox ', () => {

    cy.visit("https://register.rediff.com/register/register.php")


    //1st textbox
    cy.get('input[name^="name"]').type('Hello - World')


    //2nd textbox
    // cy.xpath('//input[starts-with(@name,"login")]').type('HelloWorldr')
    cy.get('input[name^="login"]').type('Helloworldr')

    cy.get('.btn_checkavail').click()
    cy.wait(5000)
    /*
      note : if comma given in 1st textbox, cursor stucks in 1st textbox,
      that's why, when typing in 2nd textbox, it is typing in 1st textbox
      
      */

  })
  // ==================================================================================================


  it('2. typing without special character in 1st textbox ', () => {

    cy.visit("https://register.rediff.com/register/register.php")


    //1st textbox
    cy.get('input[name^="name"]').type('Hello World')


    //2nd textbox
    // cy.xpath('//input[starts-with(@name,"login")]').type('HelloWorldr')
    cy.get('input[name^="login"]').type('Helloworldr')

    cy.get('.btn_checkavail').click()
    cy.wait(5000)
  })

  // ===========================================================================
  it('3. hidden buttons next to password  ', () => {

    cy.visit("https://register.rediff.com/register/register.php")

    //hidden button next to password 
    cy.get('e,[id="eyeiconNew"]').click()
    cy.get('e,[id="eyeiconRe"]').click()
    cy.wait(5000)
  })
  // ===========================================================================
  it('4. check boxes ', () => {

    cy.visit("https://register.rediff.com/register/register.php")

    //check box
    cy.get('[type="checkbox"]').check()  // make checkbox checked
    cy.get('[type="checkbox"]').should("be.checked")  // checking if checked
    cy.wait(5000)
    cy.get('[type="checkbox"]').uncheck()   // make checkbox uchecked
    cy.get('[type="checkbox"]').should("not.be.checked")   // checking if not checked
    cy.wait(5000)
  })
  // ===========================================================================
  it('5. dropdown', () => {

    cy.visit("https://register.rediff.com/register/register.php")

    //dropdown
    cy.get('select').eq(1).select('01').should('have.value', '01')    // value mentioned here
    /*  if multiple dropdowns available then use    "eq(1)" for working on first dropdown
      "eq(2)" for working on second dropdown  */


    cy.get('select').eq(2).select('MAY') // value not mentioned here
    cy.get('select').eq(3).select('2006').should('have.value', '2006') // value mentioned here
    cy.get('select').eq(4).select('India')
    cy.get('select').eq(5).select('Jammu').should('have.value', 'Jammu')

    //click on button   
    cy.contains('Create my account >>').click()  // submit button

    cy.wait(5000)
  })
  // // ===========================================================================
  it('6.radio buttons', () => {

    cy.visit("https://register.rediff.com/register/register.php")

    //radio button
    //cy.get('[type="radio"]').first().uncheck()  // No Error : unchecking radio button never works
    cy.get('[type="radio"]').first().check()   // make first rasio button checked
    cy.get('[type="radio"]').should("be.checked")   // checking first accessed radio button if checked
    cy.get('[type="radio"]').next().check() //   make second radion button checked
    cy.get('[type="radio"]').should("be.checked")   // checking last accessed radio button if checked
    cy.wait(5000)
  })
  // // ===========================================================================
  it('7. click on submit button', () => {

    cy.visit("https://register.rediff.com/register/register.php")

    //click on button   
    cy.contains('Create my account >>').click()  // submit button
    cy.log("it clicked on button, that's why cursor palced in 1st textbox")
  })

  // ==================================================================================================


  it('8. typing only spaces in 1st textbox ', () => {

    cy.visit("https://register.rediff.com/register/register.php")


    //1st textbox
    cy.get('input[name^="name"]').type('    ')


    //2nd textbox
    // cy.xpath('//input[starts-with(@name,"login")]').type('HelloWorldr')
    cy.get('input[name^="login"]').type('Helloworldr')

    cy.get('.btn_checkavail').click()
    cy.wait(5000)
  })
  // ==================================================================================================


  it('9. typing stating with space in 1st textbox ', () => {

    cy.visit("https://register.rediff.com/register/register.php")


    //1st textbox
    cy.get('input[name^="name"]').type(' full name')


    //2nd textbox
    cy.xpath('//input[starts-with(@name,"login")]').type('HelloWorldr')
    // cy.get('input[name^="login"]').type('Helloworldr')

    cy.get('.btn_checkavail').click()
    cy.wait(5000)
  })
  // ==================================================================================================
  it.only('10. typing stating with space in 1st textbox ', () => {

    cy.visit("https://register.rediff.com/register/register.php")

    cy.get('input[name^="name"]').clear().type(' full - name').get('.btn_checkavail').click()
  cy.wait(5000)
  cy.get('input[name^="name"]').clear().type(' full name')

  //2nd textbox
  cy.xpath('//input[starts-with(@name,"login")]').type('HelloWorldr')
  // cy.get('input[name^="login"]').type('Helloworldr')

  cy.get('.btn_checkavail').click()
  cy.wait(5000)

})

  // ==================================================================================================




})