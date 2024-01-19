import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

const homePage = require('../../../../support/pages/HomePage');

Given("I visit the Homepage", () => {
    homePage.visit();
});

When("I click on the {string} link", (link) => {
    homePage.clickOnHeaderLink(link);
});

Then("I should be on the {string} page", (page) => {
    homePage.validateHeaderUrlLink(page);
});

Then("I should see the {string} modal", (modal) => {
    homePage.validateModalIsDisplayed(modal);
});