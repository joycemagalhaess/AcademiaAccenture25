const INPUT_START_DATE = '#startdate'
const SELECT_INSURANCE = '#insurancesum'
const SELECT_MERIT = '#meritrating'
const SELECT_DAMAGE = '#damageinsurance'
const SELECTION_OPTIONAL_PRODUCTS= 'section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1) > .ideal-check'
const SELECT_COURTESY = '#courtesycar'
const BTN_NEXT_SELECT = '#nextselectpriceoption'



Cypress.Commands.add('preenchendoFormularioDadosDoProduto', () => {

    cy.get(INPUT_START_DATE).type('03/01/2025')
    cy.get(SELECT_INSURANCE).select('3.000.000,00')
    cy.get(SELECT_MERIT).select('Bonus 2')
    cy.get(SELECT_DAMAGE).select('No Coverage')
    cy.get(SELECTION_OPTIONAL_PRODUCTS).click()
    cy.get(SELECT_COURTESY).select('No')
    cy.get(BTN_NEXT_SELECT).click()

})