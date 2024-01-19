Feature: Check products on the homepage
    Background: Going to the homepage
        Given I visit the homepage
    
    @click-product @all
    Scenario: Click on the first product
        When I click on the product number 1
        Then I should see the product page
    
    