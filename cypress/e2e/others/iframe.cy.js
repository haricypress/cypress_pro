describe('Automation - Working With Iframe', function () {



    it('Cypress Test Case - Understanding Iframe and how to work with Iframe', function () {
  
        cy.visit("https://jqueryui.com/checkboxradio/")

      cy.get('label[for="checkbox-1"]').click()

     
    })
    it.only('Select Radio Button', () => {

        cy.visit("https://jqueryui.com/checkboxradio/")

        cy.get('iframe[class="demo-frame"]').then((iframe) =>{

           let x = iframe.contents().find('label[for="checkbox-1"]')

           cy.wrap(x).click()

           // to uncheck
          // cy.wrap(x).click()
           // or
           //cy.wrap(x).click().click()
            
        })
       
    //    cy.contains("Download").click()

    
   })


  })
  