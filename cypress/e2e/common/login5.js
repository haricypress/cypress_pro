
When("Enter Valid Username {string}", (username) =>{

    cy.xpath('//input[@name="username"]').type(username)
    
})
And("Enter Valid Password {string}", (password) =>{

    cy.xpath('//input[@name="password"]').type(password)
    
})




