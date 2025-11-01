Feature: Gmail Login

  As a user,
  I want to log in to my Gmail account,
  So that I can access my emails.

  Scenario: Successful login to Gmail
    Given I am on the Google login page
    When I enter my valid email and password
    Then I should be successfully logged in and see the compose button
