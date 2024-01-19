class CartPage {
  cartPageElements = {
    productImg: () => cy.get('.success > td > img'),  
    removeButton: () => cy.get('.success > td > a'),
    cartList: () => cy.get('.success'),
    placeOrderButton: () => cy.get('.btn-success'),
    nameField: () => cy.get('#name'),
    countryField: () => cy.get('#country'),
    cityField: () => cy.get('#city'),
    creditCardField: () => cy.get('#card'),
    monthField: () => cy.get('#month'),
    yearField: () => cy.get('#year'),
    purchaseButton: () => cy.get('.btn-primary').contains('Purchase'),
    confirmMessage: () => cy.get('.sweet-alert > h2'),
  };

  clickOnRemoveButton() {
    this.cartPageElements.removeButton()
      .click();
  }

  clickOnPurchaseButton() {
    this.cartPageElements.purchaseButton()
      .click();
  }

  fillOutForm(formData) {
    const { name, country, city, creditCard, month, year } = formData;
  
    this.cartPageElements.nameField().type(name);
    this.cartPageElements.countryField().type(country);
    this.cartPageElements.cityField().type(city);
    this.cartPageElements.creditCardField().type(creditCard);
    this.cartPageElements.monthField().type(month);
    this.cartPageElements.yearField().type(year);
  }

  clickOnPlaceOrderButton() {
    this.cartPageElements.placeOrderButton()
      .click();
  }

  clearShoppingCart() {
    this.cartPageElements.removeButton().each(($el) => {
      cy.wrap($el).click();
    });
  }

  validateProductSelected(selectedProductImgSrc) {
    this.cartPageElements.productImg()
      .invoke('attr', 'src').then((src) => {
        expect(src).to.be.oneOf(selectedProductImgSrc);
      });
  }

  validateCartIsEmpty() {
    this.cartPageElements.productImg()
      .should('not.exist');
  }

  validateItemQuantity(itemQuantity) {
    this.cartPageElements.productImg()
      .should('have.length', itemQuantity).and('be.visible');
  }

  validateAllProductsInTheCart(selectedProductImgSrc) {
    this.cartPageElements.productImg().each(($img) => {
      cy.wrap($img).should('have.attr', 'src').and('be.oneOf', selectedProductImgSrc);
    });
  }

  validatePurchaseIsCompleted(message) {
    this.cartPageElements.confirmMessage()
      .should('have.text', message);
  }
}

  module.exports = new CartPage();