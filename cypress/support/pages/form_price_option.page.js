const INPUT_OPTION_GOLD= 'tr > .group > :nth-child(2) > .ideal-radio'
const BTN_NEXT_SELECT = '#nextsendquote'

Cypress.Commands.add('selecionandoOpçaoDePreço', () => {

    cy.get(INPUT_OPTION_GOLD).click()
    cy.get(BTN_NEXT_SELECT).click()

})