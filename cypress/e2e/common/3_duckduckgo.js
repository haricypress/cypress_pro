import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I visit duckduckgo.com", () => {

    cy.visit("/")

})



/*
===========================================================================

file   :  duckduckgo.feature


Feature: duckduckgo.com   //like describe title

  verifying duckduckgo visit  // like description
  Scenario: visiting the frontpage  // likr it() titile
    Given I visit duckduckgo.com // like method

    */