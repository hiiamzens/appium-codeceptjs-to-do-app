const { I, detailScreen, homeScreen } = inject();

When('I update {string} information', (typeTask) => {
  detailScreen.addToList(typeTask)
});

Then('I observe that the task {string} will be displayed with {string}', (taskNameUpdate, typeTaskUpdate) => {
  homeScreen.getTaskName().then(taskName => {
    I.assertEqual(taskName, taskNameUpdate)
  })
  homeScreen.getTaskType().then(taskType => {
    I.assertEqual(taskType, typeTaskUpdate)
  })

    
});

 