const {test, expect} = require('@playwright/test')

test ("valid logon", async ({page}) =>
{
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 await page.getByPlaceholder("Username").fill("Admin",{delay: 100} )
 await page.locator("input[type ='password']").fill("admin123", {delay: 100})
 await page.locator("//button[@type='submit']").click()
 // await page.waitForTimeout(5000)
// await expect(page).toHaveURL(/dashboard/)
await page.locator("//img[@class='oxd-userdropdown-img']").click();
await page.getByText("Logout").click()
await expect(page).toHaveURL(/login/);

})
