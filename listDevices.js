const { devices } = require('@playwright/test');

   console.log('Dispositivos móviles disponibles en Playwright:');
   Object.entries(devices).forEach(([name, device]) => {
     if (device.viewport.width <= 1024) {  // Asumimos que dispositivos con ancho <= 1024 son móviles
       console.log(`- ${name}`);
       console.log(`  Viewport: ${device.viewport.width}x${device.viewport.height}`);
       console.log(`  User Agent: ${device.userAgent}`);
       console.log('');
     }
   });
   

/*
   
   En playwright.config.js, se puede usar cualquiera de estos dispositivos predefinidos sin necesidad de configurarlos manualmente:

javascriptCopyprojects: [
  {
    name: 'iPhone 12',
    use: { ...devices['iPhone 12'] },
  },
  {
    name: 'Pixel 5',
    use: { ...devices['Pixel 5'] },
  },
  // ... más dispositivos según se necesite
],
   
*/