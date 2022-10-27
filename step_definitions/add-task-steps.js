const { I, detailScreen, homeScreen } = inject();

When('I input all information', (dataTable) => {
  let tableByHeader = dataTable.parse().hashes()
  for (const info of tableByHeader) {
    detailScreen.inputTask(info.taskName)
    detailScreen.clickDateIcon()
    detailScreen.selectDate(info.date)
    I.tap("OK")
    detailScreen.clickTimeIcon()
    detailScreen.clickTimeModeBtn()
    detailScreen.inputTime(info.hour, info.minute, info.am_pm)
    I.tap("OK")
  }
});

Then('I observe that my task will be displayed', (dataTable) => {
  let tableByHeader = dataTable.parse().hashes()

  for (const info of tableByHeader) {
    homeScreen.getTaskName().then(taskName => {
      I.assertEqual(taskName, info.taskName)
    })

    // homeScreen.getTaskDateTime().then(taskDateTime => {

    //   if (info.hour != null && info.minute != null){
    //     stringDateTime = moment(info.date).format('ddd, MMM DD, YYYY') + info.hour + ":" + info.minute + " " + info.am_pm
    //   } else {
    //     stringDateTime = moment(info.date).format('ddd, MMM DD, YYYY')
    //   }
    //   console.log(stringDateTime)
    //   I.assertEqual(taskDateTime, stringDateTime)
    // })
  }
});
