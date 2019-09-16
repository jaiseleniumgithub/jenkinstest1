$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("my.feature");
formatter.feature({
  "line": 2,
  "name": "Test facebook smoke scenario",
  "description": "I want to use this template for my feature file",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Test Login with valid credential",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;;1"
    },
    {
      "cells": [
        "abc",
        "123"
      ],
      "line": 14,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;;2"
    },
    {
      "cells": [
        "abc2",
        "1234"
      ],
      "line": 15,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Test Login with valid credential",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter valid \"abc\" and \"123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_and_start_application()"
});
formatter.result({
  "duration": 24519027282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 15
    },
    {
      "val": "123",
      "offset": 25
    }
  ],
  "location": "SmokeTest.i_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 457142564,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_able_to_login_successfully()"
});
formatter.result({
  "duration": 22965731121,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.Close_the_browser()"
});
formatter.result({
  "duration": 2149149409,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Test Login with valid credential",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter valid \"abc2\" and \"1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_firefox_and_start_application()"
});
formatter.result({
  "duration": 12630932960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc2",
      "offset": 15
    },
    {
      "val": "1234",
      "offset": 26
    }
  ],
  "location": "SmokeTest.i_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 475420595,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_able_to_login_successfully()"
});
formatter.result({
  "duration": 11887691877,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.Close_the_browser()"
});
formatter.result({
  "duration": 2126449883,
  "status": "passed"
});
});