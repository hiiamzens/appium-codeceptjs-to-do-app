const { I, baseScreen, detailScreen } = inject();

Then('I click on {string} button to confirm', (buttonText) => {
  baseScreen.clickOnItemByText(buttonText)
});

Then('I observe that the task {string} will not be displayed', (taskName) => {
  I.dontSee(taskName)
});
  
