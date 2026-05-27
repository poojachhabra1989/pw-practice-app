const{test, expect} =require('@playwright/test')

test("test dropdown functionality", async({page}) =>
{
await page.goto("https://freelance-learn-automation.vercel.app/signup")
await page.locator("#state").selectOption({label: "Goa"})
await page.waitForTimeout(1000)
await page.locator("#state").selectOption({value: "Haryana"})
await page.waitForTimeout(5000)

const values = await page.locator("#state").textContent()

console.log("all the values in drop down:" + values)

    expect(values.includes("Chandigarh"))

const dropdown = await page.locator("#hobbies").selectOption(['Reading', 'Swimming'])

await page.waitForTimeout(3000)
})




