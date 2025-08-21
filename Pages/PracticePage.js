class PracticePage
{
    constructor(page)
    {
        this.page = page;
        this.testloginlink = page.locator("//a[normalize-space()='Test Login Page']");
    }

    async clicktestloginlink()
    {
        await
            this.testloginlink.click();

        await
            this.page.waitForLoadState('networkidle');

        await
             this.page.waitForTimeout(2000);
    }
}

module.exports =
{
    PracticePage
}
