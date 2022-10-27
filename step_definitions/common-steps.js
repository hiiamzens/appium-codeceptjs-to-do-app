const { I, baseScreen } = inject();

Given('I click on {string} button', (buttonName) => {
    baseScreen.clickOnButtnByAccessibilityId(buttonName)
});

When('I click on {string} button', (buttonName) => {
    baseScreen.clickOnButtnByAccessibilityId(buttonName)
});

Given('I click on {string} task', (taskName) => {
    baseScreen.clickOnItemByText(taskName)
});
  