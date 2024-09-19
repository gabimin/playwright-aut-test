// Importa los módulos de los navegadores de Playwright
const {chromium, firefox, webkit} = require("playwright")

// Define una función asíncrona llamada 'automation' que toma un tipo de navegador como argumento
const automation = async (browserType) => {

    // Inicia una instancia del navegador especificado
    const browser = await browserType.launch()

    // Crea un nuevo contexto en el navegador (similar a una sesión de navegación privada)
    const context = await browser.newContext()

    // Crea una nueva página en el contexto
    const page = await context.newPage()

    // Navega a la URL especificada
    await page.goto("https://qasyst.com")

    // Imprime en la consola el nombre del navegador y el título de la página
    console.log("Título de la página en: ", browserType.name(), await page.title());

    // Cierra el navegador
    await browser.close()
}

// Ejecuta la función 'automation' con el navegador Chromium
automation(chromium)

// Ejecuta la función 'automation' con el navegador Firefox
automation(firefox)

// Ejecuta la función 'automation' con el navegador WebKit (Safari)
automation(webkit)

// Operaciones asíncronas