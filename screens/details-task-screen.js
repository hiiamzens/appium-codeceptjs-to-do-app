const { I, baseScreen } = inject();

module.exports  = {
    locators: {
        TXT_TASK: "#com.splendapps.splendo:id/edtTaskName",
        BTN_DATE: "//*[@resource-id='com.splendapps.splendo:id/btnSetD']",
        BTN_TIME: "#com.splendapps.splendo:id/btnSetT",
        DPT_DATE: (date) => `~${date}`,
        BTN_TOGGLE_TIME_MODE: "//android.widget.ImageButton[@resource-id='android:id/toggle_mode']",
        TXT_HOUR: "#android:id/input_hour",
        TXT_MINUTE: "#android:id/input_minute",
        AM_PM_SPINNER: "#android:id/am_pm_spinner",
        DDL_LIST: "#com.splendapps.splendo:id/spinnerLists"
    },

    inputTask(taskName){
        baseScreen.inputText(this.locators.TXT_TASK, taskName)
    },

    clickDateIcon(){
        baseScreen.clickElement(this.locators.BTN_DATE)
    },

    selectDate(date){
        baseScreen.clickElement(this.locators.DPT_DATE(date))
    },

    clickTimeIcon(){
        baseScreen.clickElement(this.locators.BTN_TIME)
    },
    clickTimeModeBtn(){
        baseScreen.clickElement(this.locators.BTN_TOGGLE_TIME_MODE)
    },

    inputTime(hour, minute, am_pm){
        baseScreen.inputText(this.locators.TXT_HOUR, hour)
        baseScreen.inputText(this.locators.TXT_MINUTE, minute)
        baseScreen.clickDropdownItem(this.locators.AM_PM_SPINNER, am_pm)
    },

    addToList(listName){
        baseScreen.clickDropdownItem(this.locators.DDL_LIST, listName)
    }
}