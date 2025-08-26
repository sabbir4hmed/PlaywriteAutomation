const { expect } = require('@playwright/test');

class SecurePage {
    constructor(page) {
        this.page = page;
        this.successmassage = page.locator("text=Logged In Successfully");
        this.testException = page.locator("//a[normalize-space()='Test Exceptions']");
    }

    async verifyloginsuccess() {
        await expect(this.successmassage).toBeVisible();
    }

    async testexceptionlink() {
        await this.testException.click();
        await this.page.waitForLoadState('networkidle');

    await
             this.page.waitForTimeout(2000);
    }
}

module.exports = { SecurePage };
