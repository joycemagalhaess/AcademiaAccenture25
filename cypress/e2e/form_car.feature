# utf-8
# language: pt
  
Funcionalidade: testeFormularioVehicle - Carro
  Cenário: Preencher o formulário de registro de veículo com sucesso
    Dado estou na página do formulário de registro de veículo
    E escolho meu veiculo
    E sou direcionado para formulario correto
    Quando Preencho o formulario do veiculo com dados obrigatorios
    E os dados pessoais com dados obrigatorios
    E insiro os dados do produto
    E seleciono a opção de preço
    Então devo enviar a cotação

  

  Cenário: Tentar enviar o formulário sem preencher campos obrigatórios
    Dado estou na página do formulário de registro de veículo
    Quando deixo um campo obrigatorio em branco
    Então ele deve sinalizar a necessidade de Preencher