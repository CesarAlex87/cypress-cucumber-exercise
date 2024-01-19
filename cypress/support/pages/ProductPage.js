class ProductPage {
    productPageElements = {
      productImg: () => cy.get('.item > img'),
      cartButton: () => cy.get('.btn.btn-lg'),  
    };

    validateProductSelected(selectedProductImgSrc) {
      this.productPageElements.productImg()
        .invoke('attr', 'src').then((src) => {
          expect(src).to.be.oneOf(selectedProductImgSrc);
        });
    }

    clickOnAddToCartButton() {
      cy.intercept('POST', '/addtocart').as('addToCart'); // ADD TO UTILS
    
      this.productPageElements.cartButton()
        .should('be.visible')
        .click();
    
      cy.wait('@addToCart')
        .its('response.statusCode')
        .should('eq', 200); // ADD TO UTILS
    }
  }
  
  module.exports = new ProductPage();