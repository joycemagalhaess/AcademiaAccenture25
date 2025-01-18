
Given('estou na página do formulário de registro de veículo', () => {
    cy.visit('https://sampleapp.tricentis.com/101/app.php')
})


And('escolho meu veiculo', () => {
    cy.selecionandoCarro()
})

And('sou direcionado para formulario correto', () => {
    cy.validandoFormularioCorreto()
})

When('Preencho o formulario do veiculo com dados obrigatorios', () => {
    cy.preenchendoFormularioDoVeiculo()
    
})

 And('os dados pessoais com dados obrigatorios', () => {
     cy.preenchendoFormularioPessoal()
 })

 And('insiro os dados do produto', () => {
     cy.preenchendoFormularioDadosDoProduto()
 })

And('seleciono a opção de preço', () => {
     cy.selecionandoOpçaoDePreço()
 })


Then('devo enviar a cotação', () => {
    cy.envioCotação()
})