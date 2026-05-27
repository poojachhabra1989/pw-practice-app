const{test,expect} = require('@playwright/test')
test("handle auto suggestion", async({page})=>
{
 await page.goto("https://www.google.com/")
 await page.waitForTimeout(3000)
 await page.locator("//textarea[@name='q']").fill("a")
 await page.locator("//li[@role='presentation']")
 await page.keyboard.press("ArrowDown")
 await page.waitForTimeout(1000)
  await page.keyboard.press("ArrowDown")
  await page.waitForTimeout(1000)
   await page.keyboard.press("Enter")


})

test.only("handle auto suggestion using loop", async({page})=>
{
 await page.goto("https://www.google.com/")
 await page.waitForTimeout(3000)
 await page.locator("//textarea[@name='q']").fill("Mukesh Otwani")
 await page.waitForSelector("//div[@class='wM6W7d']")
const elements =await page.$$("//div[@class='wM6W7d']")

for(let i=0; i<elements.length; i++)
{
   const text= await elements[i].textContent()
   console.log(text)
   if(text.includes('mukesh otwani youtube'))
   {
    await elements[i].click()
    break
   }
}


})