const INPUT_EMAIL= '#email'
const INPUT_USERNAME = '#username'
const INPUT_PASSWORD ='#password'
const INPUT_CONFIRMPASSWORD = '#confirmpassword'
const BTN_SEND = '#sendemail'
const SEND_SUCESS = '.sweet-alert'

Cypress.Commands.add('envioCotação', () => {

    cy.get(INPUT_EMAIL).type(Cypress.env('email'))
    cy.get(INPUT_USERNAME).type(Cypress.env('usuario'))
    cy.get(INPUT_PASSWORD).type(Cypress.env('senha'))
    cy.get(INPUT_CONFIRMPASSWORD).type(Cypress.env('senha'))
    cy.get(BTN_SEND).click()
    cy.wait(10000)
    cy.get(SEND_SUCESS).should('be.visible')

})