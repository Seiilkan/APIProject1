Feature: Validate the Get request for List of Users
  Background: Initialize and construct HttpClient
    Given constucted Http client with parameters
      |endpoint|/api/users|
      |query   |page=2    |
    And I set custom headers
      |Accept      |
      |Content-Type|
  Scenario: Validate Get request for List of Users returns status code 200
    When the user sends Get request
    Then validates the status code is 200
    And I validate the header is "application/json"
    And I validate response contains attributes:
      |data       |
      |ad         |

