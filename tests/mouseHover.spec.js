const{test,expect} = require('@playwright/test')

test("check mouse hover functionality", async({page})=>
{
 await page.goto("https://practice-automation.com/hover/")
 await page.waitForTimeout(3000)
 await page.locator("#mouse_over").hover()
})

