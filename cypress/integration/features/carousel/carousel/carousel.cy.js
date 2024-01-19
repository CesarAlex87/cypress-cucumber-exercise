import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const homePage = require('../../../../support/pages/HomePage');

Given("I visit the Homepage", () => {
    homePage.visit();
});

Given("I am at the carousel item number {int}", (item) => {
    homePage.clickOnCarouselPositionIndicator(item);
    cy.wait(1000);
});

When("I click on the next carousel item arrow", () => {
    homePage.clickOnNextCarouselItemArrow();
});

When("I click on the previous carousel item arrow", () => {
    homePage.clickOnPreviousCarouselItemArrow();
});

When("I click on the carousel position indicator at the position {int}", (position) => {
    homePage.clickOnCarouselPositionIndicator(position);
});

Then("the carousel item displayed should be {int}", (item) => {
    homePage.validateCarouselItemIsDisplayed(item);
});

Then("I should see the carousel item at the position {int}", (item) => {
    homePage.validateCarouselItemIsDisplayed(item);
});