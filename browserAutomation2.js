const {chromium, firefox, webkit} = require("playwright")

const automation = async (browserType) => {

    const browser = await browserType.launch({headless: false})

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://qasyst.com")

    console.log("Page Title on: ", browserType.name(), await page.title());

    await browser.close()
}

//automation(chromium)

//automation(firefox)

automation(webkit)

//headless:false: Por defecto, Playwright inicia los navegadores en modo "headless" (sin cabeza), lo que significa que el navegador se ejecuta en segundo plano sin una interfaz gráfica visible. Al establecer headless: false, estamos indicando a Playwright que queremos que el navegador se inicie con su interfaz gráfica visible.