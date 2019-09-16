@tag
Feature: Test facebook smoke scenario
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Test Login with valid credential
    Given Open firefox and start application
    When I enter valid "<Username>" and "<Password>"
    Then user should able to login successfully
    Then Close the browser

    Examples: 
      | Username | Password |
      | abc      |      123 |
      | abc2     |     1234 |
