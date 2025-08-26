const { allure } = require('allure-playwright');

class HomePage {

    constructor(page) {
        this.page = page;
        this.practiceLink = page.locator("//a[normalize-space()='Practice']");
    }

    async goto() {

        await

        allure.step('Navigating to Home Page', async () => {{
             await
            this.page.goto("https://practicetestautomation.com/");

        await
            this.page.waitForLoadState('networkidle');

    }

    async clickpracticelink() {
        await
            this.practiceLink.click();

        await
            this.page.waitForLoadState('networkidle');

        await
             this.page.waitForTimeout(2000);

    }
}
module.exports =
{
    HomePage
}

