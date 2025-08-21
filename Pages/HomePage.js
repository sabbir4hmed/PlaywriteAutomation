class HomePage {

    constructor(page) {
        this.page = page;
        this.practiceLink = page.locator("//a[normalize-space()='Practice']");
    }

    async goto() {

        await
            this.page.goto("https://practicetestautomation.com/");

        await
            this.page.waitForLoadState('networkidle');

        await
             this.page.waitForTimeout(2000);

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

