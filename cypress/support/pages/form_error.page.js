const ICON_ERROR = '[style="display: block;"] > :nth-child(2) > .icon'
const SELECT_MAKE = '#make'


Cypress.Commands.add('preenchendoFormularioDoVeiculoERROR', () => {
    cy.get(SELECT_MAKE).select('Toyota')
})

Cypress.Commands.add('iconERROR', () => {
    cy.get(ICON_ERROR).should('be.visible')
})