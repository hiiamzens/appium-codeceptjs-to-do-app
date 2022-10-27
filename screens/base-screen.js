const { I, env } = inject();

module.exports = {
    locatorButton : (buttonName) => `~${buttonName}`,

    waitForVisible(locator){
        I.waitForVisible(locator, env.TIMEOUT)
    },

    waitForClickable(locator){
        this.waitForVisible(locator)
        I.waitForClickable(locator, env.TIMEOUT)
    },

    waitForElement(locator){
        I.waitForElement(locator, env.TIMEOUT)
    },

    waitForText(text){
        I.waitForText(text, env.TIMEOUT)
    },

    clickOnButtnByAccessibilityId(buttonName){
        this.waitForElement(this.locatorButton(buttonName))
        I.click(this.locatorButton(buttonName))
    },

    clickOnItemByText(text){
        this.waitForText(text)
        I.click(text)
    },

    clickElement(locator){
        this.waitForElement(locator)
        I.click(locator)
    },

    clickDropdownItem(locator, text){
        this.clickElement(locator)
        this.clickOnItemByText(text)
    },

    inputText(locator, text){
        this.waitForElement(locator)
        I.fillField(locator, text)
    },

    getText(locator){
        this.waitForElement(locator)
        return I.grabTextFrom(locator);
    }
}
