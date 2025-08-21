
const { expect } = require("@playwright/test");


class TestExceptionPage
{
    constructor(page)
    {
        this.page = page;
        this.editbutton = page.locator("//button[@id='edit_btn']");
        this.editfield = page.locator("//input[@value='Pizza']");
        this.savebutton = page.locator("//button[@id='save_btn']");
        this.addbutton = page.locator("//button[@id='add_btn']");

    }

    async clickeditfield(foodname)
    {

        await

            this.editbutton.click();

        await 
            this.page.waitForLoadState('networkidle');

      

        await
    
             this.editfield.fill(foodname);

        await
            this.page.waitForLoadState('networkidle');

       

        await
            this.savebutton.click();
        await
            this.page.waitForLoadState('networkidle');

        
    }

    async clickaddbutton()
    {
        await
            this.addbutton.click();
        await
            this.page.waitForLoadState('networkidle');

        await
             this.page.waitForTimeout(8000);
    } 
}

module.exports = { TestExceptionPage }; 