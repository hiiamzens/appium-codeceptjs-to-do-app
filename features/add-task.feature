Feature: Add task into to-do list
  I add a task into to-do list

  Scenario Outline: Add task into to-do list
    Given I click on "Add Task" button
    When I input all information
      | taskName   | date   | hour   | minute   | am_pm   |
      | <taskName> | <date> | <hour> | <minute> | <am_pm> |
    When I click on "Save Task" button
    Then I observe that my task will be displayed
      | taskName   | date   | hour   | minute   | am_pm   |
      | <taskName> | <date> | <hour> | <minute> | <am_pm> |
    Examples:
    | taskName     | date            | hour | minute | am_pm |
    | Hangout w bf | 30 October 2022 | 07   | 30     | PM    |
    | Take an exam | 31 October 2022 | 9    | 10     | AM    |

