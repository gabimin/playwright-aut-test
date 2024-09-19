const {test, expect} = require("@playwright/test")

test("Test 01.1: Page title is 'demo static page'", async({page})=>{

    await page.goto("https://www.qasyst.com")

    const title = await page.title()

    expect(title).toBe("demo static page")

})


