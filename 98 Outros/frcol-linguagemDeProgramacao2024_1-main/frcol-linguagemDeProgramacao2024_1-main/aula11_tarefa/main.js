function cadastraAnimal() {
    let animal = {
        "nome": "Totó",
        "idade": 12,
        "raca": "Vira-lata"
    }

    fetch("https://66302734c92f351c03d923c2.mockapi.io/animak", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(animal)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(() => listaAnimais());

}


function listaAnimais() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    
    fetch("https://66302734c92f351c03d923c2.mockapi.io/animak")
        .then(response => response.json())
        .then(data => {
            data.forEach(animal => {
                let item = document.createElement("li");

                item.innerHTML = `${animal.id} - ${animal.nome} (${animal.idade}) - ${animal.raca}`;
                item.id = animal.id;
                lista.appendChild(item);
            })
        })
}

listaAnimais();