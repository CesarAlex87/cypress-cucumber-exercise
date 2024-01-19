import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const homePage = require('../../../../support/pages/HomePage');

Given("I visit the homepage", () => {
    homePage.visit();
});

When("I click on the product number {int}", (product) => {
    homePage.clickOnProduct(product - 1);
});

Then("I should see the product page", () => {
    cy.url().should('include', 'https://www.demoblaze.com/prod.html?idp_=1');
});

