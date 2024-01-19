Feature: Check the carousel on the Homepage
    Background: Going to the homepage
        Given I visit the Homepage
    
    @next-carousel-item @regression @all
    Scenario: Click on next carousel item arrow
        Given I am at the carousel item number 1
        When I click on the next carousel item arrow
        Then the carousel item displayed should be 2

    @previous-carousel-item @smoke @all
    Scenario: Click on the previous carousel item arrow
        Given I am at the carousel item number 3
        When I click on the previous carousel item arrow
        Then the carousel item displayed should be 2
    
    @carousel-position-indicator @sanity @all
    Scenario: Navigate on carousel position indicator
        When I click on the carousel position indicator at the position 1
        Then I should see the carousel item at the position 1