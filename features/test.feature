Feature: Exception handling inside Cucumber step definitions

  Scenario: Exception thrown inside a step definition
    When I open the webpage
    And I look for an element that isn't there
    Then the scenario should fail gracefully