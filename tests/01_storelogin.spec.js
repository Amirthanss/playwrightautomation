const {test, expect} = require('@playwright/test');



test('01_StoreLoginTestcase', async ({page})=>{

    await page.goto('https://demoblaze.com/');
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[@onclick='logIn()']").click();
    const logoutbtn = page.locator("//a[@onclick='logOut()']");

    await expect(logoutbtn).toBeVisible();

   
})
