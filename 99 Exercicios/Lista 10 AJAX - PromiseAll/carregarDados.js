fetch("dados.json")
  .then((response) => response.json())
  .then((data) => {
    // Função para preencher os inputs com base na seleção atual das <select>
    function preencherInputs() {
      // Dados do setor selecionado
      const setorId = document.getElementById("boxSetor").value;
      const setor = data.Setor.find((item) => item.id == setorId);
      document.getElementById("nomeSetor").value = setor.nome;
      document.getElementById("siglaSetor").value = setor.sigla;

      // Dados do cargo selecionado
      const cargoId = document.getElementById("boxCargo").value;
      const cargo = data.Cargo.find((item) => item.id == cargoId);
      document.getElementById("nomeCargo").value = cargo.nome;
      document.getElementById("salarioCargo").value = cargo.salário;

      // Dados do convênio selecionado
      const convenioId = document.getElementById("boxConvenio").value;
      const convenio = data.Convênio.find((item) => item.id == convenioId);
      document.getElementById("nomeConvenio").value = convenio.nome;
      document.getElementById("valorTitularConvenio").value =
        convenio.valor.titular;
      document.getElementById("valorDependenteConvenio").value =
        convenio.valor.dependente;
    }

    // Chama a função para preencher os inputs com base na seleção atual das <select>
    preencherInputs();

    // Adiciona evento de escuta para cada <select>
    document
      .getElementById("boxSetor")
      .addEventListener("change", preencherInputs);
    document
      .getElementById("boxCargo")
      .addEventListener("change", preencherInputs);
    document
      .getElementById("boxConvenio")
      .addEventListener("change", preencherInputs);
  });
