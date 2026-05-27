const{test,expect} = require('@playwright/test')

test("check mouse hover functionality", async({page})=>
{
 await page.goto("https://the-internet.herokuapp.com/upload")
 await page.waitForTimeout(3000)
 await page.locator("#file-upload").setInputFiles("./Upload/my sql.png")
 await page.locator("#file-submit").click();

 await expect(page.locator("//h3")).toHaveText("File Uploaded!")
})