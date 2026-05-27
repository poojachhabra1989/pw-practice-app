const{test,expect} = require('@playwright/test')

test("check mouse hover functionality", async({page})=>
{
 await page.goto("https://freelance-learn-automation.vercel.app/login")
 await page.locator("#email1").fill("chhabra.88@gmail.com")
 await page.locator("#password1").fill("Test@1234")
 await page.locator(".submit-btn").click()
await page.getByRole('button', { name: 'Add to Cart' }).first().click()
})