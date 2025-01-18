Given('estou na página do formulário de registro de veículo', () => {
    cy.visit('/app.php')

})

When('deixo um campo obrigatorio em branco', () => {
    cy.preenchendoFormularioDoVeiculoERROR()
    
})

Then('ele deve sinalizar a necessidade de Preencher', () => {
    cy.iconERROR()
})
