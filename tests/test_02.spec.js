const {test, expect} = require("@playwright/test")


test("Test 01.2: H1 has content", async({page})=>{

    await page.goto("https://www.qasyst.com")

    const H1_TEXT = await page.textContent("h1")

    expect(H1_TEXT).not.toBe("")

})
