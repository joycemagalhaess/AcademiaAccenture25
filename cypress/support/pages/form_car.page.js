//Variaveis do Formulario do veiculo
const SELECT_MAKE = '#make'
const INPUT_ENGINE = '#engineperformance'
const INPUT_DATA_MANUFACTURE = '#dateofmanufacture'
const SELECT_SEATS = '#numberofseats'
const SELECT_FUEL = '#fuel'
const INPUT_LIST_PRICE = '#listprice'
const INPUT_LICENSE  = '#licenseplatenumber'
const INPUT_ANNUAL = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'

//Variaveis para verificar formulario correto
const BTN_AUTOMOBILE = '#nav_automobile'
const TYPE_AUTOMOBILE = '#selectedinsurance'



Cypress.Commands.add('selecionandoCarro', () => {
    cy.get(BTN_AUTOMOBILE).click()
})

Cypress.Commands.add('validandoFormularioCorreto', () => {
    cy.get(TYPE_AUTOMOBILE).should('contain','Automobile Insurance')
})

Cypress.Commands.add('preenchendoFormularioDoVeiculo', () => {
    cy.get(SELECT_MAKE).select('Toyota')
    cy.get(INPUT_ENGINE).type('95')
    cy.get(INPUT_DATA_MANUFACTURE).type('01/21/2021')
    cy.get(SELECT_SEATS).select('5')
    cy.get(SELECT_FUEL).select('Diesel')
    cy.get(INPUT_LIST_PRICE).type('25000')
    cy.get(INPUT_LICENSE).type('ABC-1234')
    cy.get(INPUT_ANNUAL).type('15000')
    cy.get(BTN_NEXT).click()
})


