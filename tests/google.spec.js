const{test, expect} =require('@playwright/test')

test("open google", async ({page}) =>
{
await page.goto("https://www.google.com/")
const url = await page.url()
const ti = await page.title()
console.log("The page url is: " + " " + url)
console.log("The page title is: " + " " + url)
await expect(page).toHaveTitle("Google")


})