Feature: Header Navigation Links
    Background: 
        Given I visit the Homepage

    @home-link @all
    Scenario: Click on Home header link
        When I click on the "Home" link
        Then I should be on the "Home" page

    @contact-link @smoke @all
    Scenario: Click on Contact header link
        When I click on the "Contact" link
        Then I should see the "Contact" modal
    
    @about-us-link @all
    Scenario: Click on About us header link
        When I click on the "About us" link
        Then I should see the "About us" modal

    @cart-link @all
    Scenario: Click on Cart header link
        When I click on the "Cart" link
        Then I should see the "Cart" modal

    @log-in-link @all
    Scenario: Click on Log in header link
        When I click on the "Log in" link
        Then I should see the "Log in" modal

    @sign-up-link @all
    Scenario: Click on Sign up header link
        When I click on the "Sign up" link
        Then I should see the "Sign up" modal