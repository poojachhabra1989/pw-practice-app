const{test,expect} = require('@playwright/test')
test("handle alert", async({page})=>
{
 await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

 page.on('dialog', async(d) =>
{
// await expect(d.message().toContain("I am a JS Alert"))
await d.accept()
})
 await page.waitForTimeout(3000)
 await page.locator("//button[text()='Click for JS Alert']").click()
 
})

test("confirm alert", async({page})=>
{
 await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

 page.on('dialog', async (confirmbox) => {
        // await expect(d.message().toContain("I am a JS Alert"))
        await confirmbox.dismiss()
    })
 await page.waitForTimeout(3000)
 await page.locator("//button[text()='Click for JS Alert']").click()
 
})
