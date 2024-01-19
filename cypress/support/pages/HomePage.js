const scenarioCounter = require('../utils/productCounter');

class HomePage {

  selectedProductImgSrc = [];
  // Elements getters

  homePageElements = {
    navBarContainer: () => cy.get('.narvbarx'),
    productCard: () => cy.get('.card'),
    carouselNextItemArrow: () => cy.get('.carousel-control-next-icon'),
    carouselPreviousItemArrow: () => cy.get('.carousel-control-prev-icon'),
    carouselPositionIndicator: () => cy.get('.carousel-indicators > li'),
    carouselItems: () => cy.get('.carousel-item'),
    navBarLink: (link) => cy.get('.navbar-nav > li > a').contains(link),
    logInModalTitle: () => cy.get('#logInModalLabel'),
    signUpModalTitle: () => cy.get('#signInModalLabel'),
    contactModalTitle: () => cy.get('#exampleModalLabel'),
    aboutUsModalTitle: () => cy.get('#videoModalLabel'),
    caterogiesList: () => cy.get('.list-group > #itemc'),
  };

  visit() {
    cy.request({
      method: 'GET',
      url: '/',
      failOnStatusCode: false,
    }).then((response) => {
      if (response.status !== 200) {
        cy.log(`Failed to visit the page. Status code: ${response.status}`);
      } else {
        cy.visit('/');
      }
    });
    this.validateProductsAreDisplayed();
  }
  
  // Click Actions

  clickOnHeaderLink(link) {
    this.homePageElements.navBarLink(link).click();
  }

  clickOnCategory(categoryName) {
    this.homePageElements.caterogiesList()
      .filter(':contains(' + categoryName + ')')
      .click();
  }

  clickOnProduct(product) {
    this.homePageElements.productCard()
      .eq(product)
      .find('img')
      .first()
      .as('productCard' + scenarioCounter.get())
      .invoke('attr', 'src')
      .then((src) => {
        this.selectedProductImgSrc.push(src);
      });
  
    cy.get('@productCard' + scenarioCounter.get()).click();
    scenarioCounter.increment();
  }
  
  clickOnNextCarouselItemArrow() {
    this.homePageElements.carouselNextItemArrow().click();
  }

  clickOnPreviousCarouselItemArrow() {
    this.homePageElements.carouselPreviousItemArrow().click();
  }

  clickOnCarouselPositionIndicator(position) {
    this.homePageElements.carouselPositionIndicator().eq(position - 1).click();
  }

  clickOnCarouselItem() {
    this.homePageElements.carouselItemDisplayed().click();
  }

  // Validation Actions

  validateCarouselItemIsDisplayed(item) {
    this.homePageElements.carouselItems().eq(item - 3).should('not.be.visible');
    this.homePageElements.carouselItems().eq(item - 2).should('not.be.visible');
    this.homePageElements.carouselItems().eq(item - 1).should('be.visible');
  }

  validateHeaderUrlLink(page) {
    const pageUrl = Cypress.config().headerUrls[page.toLowerCase()];
    cy.url().should('include', pageUrl);
  }

  validateModalIsDisplayed(modal) {
    switch(modal) {
      case 'Log in':
        this.homePageElements.logInModalTitle()
        .should('have.text', 'Log in')
        .parentsUntil('modal')
        .should('have.class', 'show');
        break;
      case 'Sign up':
        this.homePageElements.signUpModalTitle()
        .should('contain', 'Sign up')
        .parentsUntil('modal')
        .should('have.class', 'show');;
        break;
      case 'About us':
        this.homePageElements.aboutUsModalTitle()
        .should('contain', 'About us')
        .parentsUntil('modal')
        .should('have.class', 'show');;
        break;
      case 'Contact':
        this.homePageElements.contactModalTitle()
        .should('contain', 'New message')
        .parentsUntil('modal')
        .should('have.class', 'show');;
        break;
    }
  }

  validateProductsCategory(category) {
    switch(category.toLowerCase()) {
      case 'phones':
        this.homePageElements.productCard().should('have.length', 7);
      break;
      case 'laptops':
        this.homePageElements.productCard().should('have.length', 6);
      break;
      case 'monitors':
        this.homePageElements.productCard().should('have.length', 2);
    }
  }

  //deprecated
  validateProductUrl() {
    if (this.selectedProductHref != null) {
      cy.url().should('include', this.selectedProductHref);
    } else {
      throw new Error('No product selected');
    }
  }

  validateProductsAreDisplayed() {
    this.homePageElements.productCard()
      .should('be.visible');
  }

  // GETTERS

  getSelectedProductImgSrc() {
    return this.selectedProductImgSrc;
  }
}

module.exports = new HomePage();