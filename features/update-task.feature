Feature: Update task in to-do list
  I update a task into to-do list

Background: Add task to update
  Given I click on "Add Task" button
  When I input all information
    | taskName     | date            | hour | minute | am_pm |
    | Do something | 30 October 2022 | 12   | 12     | AM    | 
  And I click on "Save Task" button

  Scenario Outline: Update task into to-do list
    Given I click on "Do something" task
    When I update "<typeTask>" information
    And I click on "Save Task" button
    Then I observe that the task "Do something" will be displayed with "<typeTask>"
  Examples:
    | typeTask |
    | Personal |
    | Shopping |