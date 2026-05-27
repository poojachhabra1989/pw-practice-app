const{test, expect} =require('@playwright/test')

test("verify error message", async ({page}) =>
{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder("Username").pressSequentially("admin", {delay: 200})
 await page.locator("input[type ='password']").pressSequentially("admin1234", {delay: 300})
 await page.locator("//button[@type='submit']").click()
 await page.waitForTimeout(5000)
 const error=await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
console.log("error message is:" + error)
await expect(error).toBe('Invalid credentials')
})
