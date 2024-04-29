fetch("dados.json")
  .then((response) => response.json())
  .then((data) => {
    // Função para preencher os inputs com base na seleção atual das <select>
    function preencherInputsSetor() {
      // Dados do setor selecionado
      const setorId = document.getElementById("boxSetor").value;

      if (setorId !== undefined && setorId !== null) {
        const setor = data.Setor.find((item) => item.id == setorId);
        if (setor) {
          document.getElementById("nomeSetor").value = setor.nome;
          document.getElementById("siglaSetor").value = setor.sigla;
        }
      }
    }

    function preencherInputsCargo() {
      // Dados do cargo selecionado
      const cargoId = document.getElementById("boxCargo").value;

      if (cargoId !== undefined && cargoId !== null) {
        const cargo = data.Cargo.find((item) => item.id == cargoId);
        if (cargo) {
          document.getElementById("nomeCargo").value = cargo.nome;
          document.getElementById("salarioCargo").value = cargo.salário;
        }
      }
    }

    function preencherInputsConvenio() {
      // Dados do convênio selecionado
      const convenioId = document.getElementById("boxConvenio").value;

      if (convenioId !== undefined && convenioId !== null) {
        const convenio = data.Convênio.find((item) => item.id == convenioId);
        if (convenio) {
          document.getElementById("nomeConvenio").value = convenio.nome;
          document.getElementById("valorTitularConvenio").value =
            convenio.valor.titular;
          document.getElementById("valorDependenteConvenio").value =
            convenio.valor.dependente;
        }
      }
    }

    // Adiciona evento de escuta para cada <select>
    document
      .getElementById("boxSetor")
      .addEventListener("change", preencherInputsSetor);
    document
      .getElementById("boxCargo")
      .addEventListener("change", preencherInputsCargo);
    document
      .getElementById("boxConvenio")
      .addEventListener("change", preencherInputsConvenio);

    // Chama a função para preencher os inputs com base na seleção atual das <select>
    preencherInputsSetor();
    preencherInputsCargo();
    preencherInputsConvenio();
  });

document.getElementById("btnSalvar").addEventListener("click", function () {
  let funcionario = {
    nome: document.getElementById("nomeDados").value,
    telefone: document.getElementById("telefoneDados").value,
    email: document.getElementById("emailDados").value,
    cpf: document.getElementById("cpfDados").value,
    rg: document.getElementById("rgDados").value,
    idCargo: document.getElementById("boxCargo").value,
    idSetor: document.getElementById("boxSetor").value,
    idConvenio: document.getElementById("boxConvenio").value,
  };
  salvarFuncionario(funcionario);
});

function salvarFuncionario(funcionario) {
  let url = "https://66266bc2052332d55322d1f0.mockapi.io/funcionario";
  fetch(url, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(funcionario),
  }).then((resposta) => {
    if (resposta.status == 201) {
      window.alert("Salvo com sucesso.");
    }
  });
}
