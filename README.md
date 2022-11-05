## automation-cypress10-qa
Proyecto de pruebas automatizadas con Cypress 10

## Resumen

Este proyecto tiene el objetivo de realizar pruebas automatizadas utilizando _Javascript_ y _Cypress v10_.


## Prerrequisitos

Previamente asegurarse de instalar todas las dependencias del proyecto:

```bash
npm install --save-dev 
```

Instalar la extensión de Chrome [Ranorex Selocity](https://chrome.google.com/webstore/detail/ranorex-selocity/ocgghcnnjekfpbmafindjmijdpopafoe)
que usaremos para crear los locators.

## Ejecutar Pruebas con Cypress-grep

Para correr TODOS los tests:
```bash
npm run cypress:run:all
```

Para correr todos los test de servicios:
```bash
npm run cypress:run:service:api
```

Para correr todos los tests visuales:
```bash
npm run cypress:run:visual
```

Para abrir la interfaz de Cypress (E2E):
```bash
npm start
```

Para generar los reportes HTML.

Primero:
```bash
npm run report
```
Finalmente:
```bash
npm run html-report
```

Los reportes se generarán en la carpeta: _./mochawesome-report/cypress/reports/html/.jsons/_

## Detalles

**Autor**:
_Natanael Correa_

**Contacto**:
_nata_444@live.com.ar_