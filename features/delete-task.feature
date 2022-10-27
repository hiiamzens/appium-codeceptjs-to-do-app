Feature: Delete task in to-do list
  I delete a task into to-do list

Background: Add task to delete
  Given I click on "Add Task" button
  When I input all information
    | taskName | date            | hour | minute | am_pm |
    | Eat w bf | 30 October 2022 | 08   | 15     | PM    |
  And I click on "Save Task" button

  Scenario: Delete task in to-do list
    Given I click on "Eat w bf" task
    Then I click on "Delete Task" button
    And I click on "DELETE" button to confirm
    Then I observe that the task "Eat w bf" will not be displayed
