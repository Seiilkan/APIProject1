$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/ListOfResources.feature");
formatter.feature({
  "name": "Validate the Get request for List of Users",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Initialize and construct HttpClient",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "constucted Http client with parameters",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API.StepDefs.constucted_Http_client_with_parameters(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set custom headers",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_set_custom_headers(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Get request for List Resources returns status code 200",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "the user sends Get request",
  "keyword": "When "
});
formatter.match({
  "location": "API.StepDefs.the_user_sends_Get_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validates the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API.StepDefs.validates_the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the header is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_the_header_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate response contains attributes:",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_response_contains_attributes(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate response attributes and values:",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.I_Validate_Response_Attributes_And_Values(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Initialize and construct HttpClient",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "constucted Http client with parameters",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API.StepDefs.constucted_Http_client_with_parameters(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set custom headers",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_set_custom_headers(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Get request for List Resources returns status code 500",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "the user sends Get request",
  "keyword": "When "
});
formatter.match({
  "location": "API.StepDefs.the_user_sends_Get_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validates the status code is 500",
  "keyword": "Then "
});
formatter.match({
  "location": "API.StepDefs.validates_the_status_code_is(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c500\u003e but was:\u003c200\u003e\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\n\tat org.junit.Assert.assertEquals(Assert.java:647)\n\tat org.junit.Assert.assertEquals(Assert.java:633)\n\tat API.StepDefs.validates_the_status_code_is(StepDefs.java:62)\n\tat ✽.validates the status code is 500(file:///Users/Seilkhan/Documents/API/src/test/resources/ListOfResources.feature:30)\n",
  "status": "failed"
});
formatter.step({
  "name": "I validate the header is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_the_header_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate response contains attributes:",
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_response_contains_attributes(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/ListOfUsers.feature");
formatter.feature({
  "name": "Validate the Get request for List of Users",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Initialize and construct HttpClient",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "constucted Http client with parameters",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API.StepDefs.constucted_Http_client_with_parameters(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set custom headers",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_set_custom_headers(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Get request for List of Users returns status code 200",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user sends Get request",
  "keyword": "When "
});
formatter.match({
  "location": "API.StepDefs.the_user_sends_Get_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validates the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API.StepDefs.validates_the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the header is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_the_header_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate response contains attributes:",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_response_contains_attributes(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate response attributes and values:",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.I_Validate_Response_Attributes_And_Values(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the data of first user",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.validateTheDataOfFirstUser(java.util.Map\u003cjava.lang.String, java.lang.Object\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/SingleResources.feature");
formatter.feature({
  "name": "Validate the Get request for Single Resource",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Initialize and construct HttpClient",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "constucted Http client with parameters",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API.StepDefs.constucted_Http_client_with_parameters(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set custom headers",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_set_custom_headers(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Get request for Single Resource returns status code 200",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "the user sends Get request",
  "keyword": "When "
});
formatter.match({
  "location": "API.StepDefs.the_user_sends_Get_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validates the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API.StepDefs.validates_the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the header is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_the_header_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate response contains attributes:",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_response_contains_attributes(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Initialize and construct HttpClient",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "constucted Http client with parameters",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API.StepDefs.constucted_Http_client_with_parameters(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set custom headers",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_set_custom_headers(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Get request for Single Resource returns status code 200",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "the user sends Get request",
  "keyword": "When "
});
formatter.match({
  "location": "API.StepDefs.the_user_sends_Get_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validates the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API.StepDefs.validates_the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the header is \"application/xml\"",
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_the_header_is(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat API.StepDefs.i_validate_the_header_is(StepDefs.java:67)\n\tat ✽.I validate the header is \"application/xml\"(file:///Users/Seilkhan/Documents/API/src/test/resources/SingleResources.feature:23)\n",
  "status": "failed"
});
formatter.step({
  "name": "I validate response contains attributes:",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_response_contains_attributes(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/SingleResourcesNotFound.feature");
formatter.feature({
  "name": "Validate the Get request for Single Resource Not Found",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Initialize and construct HttpClient",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "constucted Http client with parameters",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API.StepDefs.constucted_Http_client_with_parameters(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set custom headers",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_set_custom_headers(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Get request for Single Resource Not Found returns status code 404",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user sends Get request",
  "keyword": "When "
});
formatter.match({
  "location": "API.StepDefs.the_user_sends_Get_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validates the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "API.StepDefs.validates_the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the header is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_the_header_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate response contains attributes:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_response_contains_attributes(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/SingleUser.feature");
formatter.feature({
  "name": "Validate the Get request for List of Users",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Initialize and construct HttpClient",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "constucted Http client with parameters",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API.StepDefs.constucted_Http_client_with_parameters(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set custom headers",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_set_custom_headers(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Get request for List of Users returns status code 200",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user sends Get request",
  "keyword": "When "
});
formatter.match({
  "location": "API.StepDefs.the_user_sends_Get_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validates the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "API.StepDefs.validates_the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the header is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_the_header_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate response contains attributes:",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_response_contains_attributes(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/SingleUserNotFound.feature");
formatter.feature({
  "name": "Validate the Get request for Single User Not Found",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Initialize and construct HttpClient",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "constucted Http client with parameters",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "API.StepDefs.constucted_Http_client_with_parameters(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set custom headers",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_set_custom_headers(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Get request for Single User Not Found returns status code 404",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user sends Get request",
  "keyword": "When "
});
formatter.match({
  "location": "API.StepDefs.the_user_sends_Get_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validates the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "API.StepDefs.validates_the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the header is \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_the_header_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate response contains attributes:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "API.StepDefs.i_validate_response_contains_attributes(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
});