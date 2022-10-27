const {I, baseScreen} = inject()

module.exports = {
    locators: {
        LBL_TASK_NAME: "#com.splendapps.splendo:id/task_name",
        LBL_TASK_TYPE: "#com.splendapps.splendo:id/task_list_name",
        LBL_DATE_TIME: "#com.splendapps.splendo:id/task_due"            
        },

        getTaskName(){
            return baseScreen.getText(this.locators.LBL_TASK_NAME)
        },

        getTaskType(){
            return baseScreen.getText(this.locators.LBL_TASK_TYPE)
        },

        getTaskDateTime(){
            return baseScreen.getText(this.locators.LBL_DATE_TIME)
        }
}
