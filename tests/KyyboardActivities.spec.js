const{test,expect} = require('@playwright/test')

test("keyboard actions", async({page})=>
{
 await page.goto("https://www.google.com/")
 await page.waitForTimeout(3000)
 await page.locator("//textarea[@name='q']").fill("mukesh otwani")
 //await page.keyboard.press("Enter")
await page.keyboard.press("Control+A")
await page.waitForTimeout(3000)
await page.keyboard.press("Control+C")
await page.waitForTimeout(3000)
await page.keyboard.press("Backspace")
await page.keyboard.press("Control+V")
 
})