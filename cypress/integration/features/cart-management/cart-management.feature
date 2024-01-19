Feature: Cart Management
    Background: Going to the Homepage
        Given I visit the Homepage
    
    @category @all
    Scenario: Click on any category
        When I click on "Phones" category
        Then should only be products with the "Phones" category on the page

    @remove-from-cart @regression @all
    Scenario: Remove all items in the cart
        Given I click on the product number 1
        And I am at the product page
        And I click on Add to cart button
        And I visit the Homepage
        And I click on the product number 3
        And I am at the product page
        And I click on Add to cart button
        When I click on the "Cart" link
        And I see all the items in the cart
        And I remove all the items from the cart
        Then the cart should be empty

    @add-to-cart @sanity @all
    Scenario: Add a product to the cart
        Given I click on the product number 1
        And I am at the product page
        When I click on Add to cart button
        And I click on the "Cart" link
        Then the product should be added to the cart
        And I should see 1 items in the cart
    
    @cart-persistence @regression @all
    Scenario: Cart shop persist if I move to another page
        Given I click on the product number 1
        And I am at the product page
        When I click on Add to cart button
        And I click on the "Cart" link
        Then the product should be added to the cart
        And I should see 1 items in the cart
        And I visit the Homepage
        And I click on the "Cart" link
        Then I should see 1 items in the cart

    @complete-purchase @regression @all
    Scenario: Complete a purchase
        Given I click on the product number 1
        And I am at the product page
        When I click on Add to cart button
        And I click on the "Cart" link
        Then the product should be added to the cart
        And I should see 1 items in the cart
        And I click on the Place Order button
        And I fill in the form with user data
        And I click on the Purchase button
        Then I should see the message "Thank you for your purchase!"