const{test, expect} =require('@playwright/test')

//test is a function to write our test
// expect function is required to put assertion

test("My First case", async function({page})
{
  expect(12).toBe(12)
})

test.skip("My second test", async function({page})
{
  expect(100).toBe(100.00)
})

test ("My third case", async function({page})
{
//expect("pooja").toBe("pooji")
expect ("pooja chhabra").toContain("chh")
expect("neeraj aggarwal".includes("neeraj"))
})
