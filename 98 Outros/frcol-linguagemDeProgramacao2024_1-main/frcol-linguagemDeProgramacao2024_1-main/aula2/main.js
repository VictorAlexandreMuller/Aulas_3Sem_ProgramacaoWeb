let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.pop(); // Removes the last element ("Mango")
console.log(fruits);

let pessoa = {
    "nome": "João",
    "ultimoNome": "de Camargo",
    "idade": 25,
    "isActivo": true,
    "Carros": ["Ferrari", "Porsche"],

    nomeCompleto: function() {
        return this.nome + " " + this.ultimoNome;
    }
}

console.log(pessoa.nomeCompleto());

let nome = "Fabio";

if (nome ==='Fabio') {
    console.log("Olá Fabio");
}

