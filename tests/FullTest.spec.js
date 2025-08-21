const {test} = require('@playwright/test');

const {HomePage} = require('../Pages/HomePage');
const {PracticePage} = require('../Pages/PracticePage');
const {LoginPage} = require('../Pages/LoginPage');
const {SecurePage} = require('../Pages/SecurePage');
const {TestExceptionPage} = require('../Pages/TestExceptionPage');

test('Full Practice Test Flow' , async ({page}) => {

    const homepage = new HomePage(page);
    const practicePage = new PracticePage(page);
    const loginPage = new LoginPage(page);
    const securePage = new SecurePage(page);
    const homepage2 = new HomePage(page);
    const testexception = new SecurePage(page);

    const testExceptionPage = new TestExceptionPage(page);

    await homepage.goto();
    await homepage.clickpracticelink();
    await practicePage.clicktestloginlink();
    await loginPage.login("student", "Password123");
    await securePage.verifyloginsuccess();
    await homepage2.clickpracticelink();
    await testexception.testexceptionlink();

    await testExceptionPage.clickeditfield("Burger");
    await testExceptionPage.clickaddbutton();


})
