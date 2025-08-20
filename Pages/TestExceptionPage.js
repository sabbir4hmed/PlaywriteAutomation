
const { expect } = require("@playwright/test");


class TestExceptionPage
{
    constructor(page)
    {
        this.page = page;
        this.editbutton = page.locator("//button[@id='edit_btn']");
        this.editfield = page.locator("//input[@value='Pizza']");
        this.savebutton = page.locator("//button[@id='save_btn']");

    }
}