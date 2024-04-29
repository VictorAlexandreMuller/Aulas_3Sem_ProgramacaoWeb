// Carrega o arquivo JSON
fetch("dados.json")
  .then((response) => response.json())
  .then((data) => {
    // Cria opções para um <select> dado um array de objetos
    function popularSelect(selectId, dataArray) {
      const select = document.getElementById(selectId);
      const option1 = document.createElement("option");

      option1.value = "";
      option1.textContent = "--- Selecione uma opção ---";
      // option1.disabled = true;
      // option1.selected = true;
      select.appendChild(option1);

      dataArray.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.nome;
        select.appendChild(option);
      });
    }

    // Popula os <select> com os dados do JSON
    popularSelect("boxSetor", data.Setor);
    popularSelect("boxCargo", data.Cargo);
    popularSelect("boxConvenio", data.Convênio);
  });
