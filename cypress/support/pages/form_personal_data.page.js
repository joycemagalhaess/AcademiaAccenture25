const INPUT_FIRST_NAME = '#firstname'
const INPUT_LAST_NAME = '#lastname'
const INPUT_BIRTHDATE = '#birthdate'
const INPUT_STREET = '#streetaddress'
const SELECTION_COUNTRY = '#country'
const INPUT_ZIPCODE = '#zipcode'
const INPUT_OCCUPATION = '#occupation'
const RADIO_HOBBIES = '.group > :nth-child(5)'
const BTN_NEXT_SELECT = '.next'




Cypress.Commands.add('preenchendoFormularioPessoal', () => {
    cy.get(INPUT_FIRST_NAME).type('Joyce')
    cy.get(INPUT_LAST_NAME).type('Magalhaes')
    cy.get(INPUT_BIRTHDATE).type('09/21/1978')
    cy.get(INPUT_STREET).type('85011')
    cy.get(INPUT_ZIPCODE).type('850113')
    cy.get(SELECTION_COUNTRY).select('Brazil')
    cy.get(INPUT_OCCUPATION).select('Employee')
    cy.get(RADIO_HOBBIES).click()
    cy.get(BTN_NEXT_SELECT).eq(1).click()
})