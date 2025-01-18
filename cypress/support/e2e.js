// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    //Estava tendo um erro vindo do codigo nativo do site usei essa solução pra não tomar esse erro.
  })
import './commands'
import './pages/form_car.page'
import './pages/form_personal_data.page'
import './pages/form_product_data.page'
import'./pages/form_price_option.page'
import './pages/form_send_quote.page'
import './pages/form_error.page'