import { Given, And, When, Then, After, Before } from "cypress-cucumber-preprocessor/steps";

const homePage = require('../../../../support/pages/HomePage');
const cartPage = require('../../../../support/pages/CartPage');
const productPage = require('../../../../support/pages/ProductPage');
const scenarioCounter = require('../../../../support/utils/productCounter');
const { getRandomUserData } = require('../../../../support/utils/randomUserData');


Before(() => {
    scenarioCounter.reset();
});

Given("I visit the Homepage", () => {
    homePage.visit();
});

Given("I click on the product number {int}", (product) => {
    homePage.clickOnProduct(product);
});

When("I click on Add to cart button", () => {
    productPage.clickOnAddToCartButton();
});

And("I fill in the form with user data", () => {
    const userData = getRandomUserData();
    cartPage.fillOutForm(userData);
});

And("I click on the Purchase button", () => { 
    cartPage.clickOnPurchaseButton();
});

And("I click on the Place Order button", () => {
    cartPage.clickOnPlaceOrderButton();
});

And("I am at the product page", () => {
    productPage.validateProductSelected(homePage.getSelectedProductImgSrc());
});

And("I remove all the items from the cart", () => {
    cartPage.clearShoppingCart();
});    

And("I see all the items in the cart", () => {
    cartPage.validateAllProductsInTheCart(homePage.getSelectedProductImgSrc());
});

And("I should see {int} items in the cart", (itemQuantity) => {
    cartPage.validateItemQuantity(itemQuantity);
});

When("I click on the {string} link", (link) => {
    homePage.clickOnHeaderLink(link);
}); 

When("I click on {string} category", (category) => {
    homePage.clickOnCategory(category);
});

When("I click on the remove button", () => {
    cartPage.clickOnRemoveButton();
});

Then("should only be products with the {string} category on the page", (category) => {
    homePage.validateProductsCategory(category);
});

Then("the product should be added to the cart", () => {
    cartPage.validateProductSelected(homePage.getSelectedProductImgSrc());
});

Then("the cart should be empty", () => {
    cartPage.validateCartIsEmpty();
});

Then("I should see the message {string}", (message) => {
    cartPage.validatePurchaseIsCompleted(message);
});