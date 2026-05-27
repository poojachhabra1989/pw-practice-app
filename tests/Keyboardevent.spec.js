const{test,expect} = require('@playwright/test')
test("keyboard actions", async({page})=>
{
 await page.goto("https://www.google.com/")
 await page.waitForTimeout(3000)
 await page.locator("//textarea[@name='q']").focus()
 await page.keyboard.type("Mukesh Owani!")
 await page.keyboard.press("ArrowLeft")
 await page.keyboard.down("Shift")


 for(let i=0; i< "Owani!".length; i++)
 {
    await page.keyboard.press("ArrowLeft")

 }
 await page.keyboard.up("Shift")
 await page.keyboard.press("Backspace")
})