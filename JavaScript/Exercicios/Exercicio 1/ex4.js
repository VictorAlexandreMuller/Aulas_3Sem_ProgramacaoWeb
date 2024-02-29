// 4.	Faça um programa que recebe o nome de uma variável e mostre o <<primeiro>>.<<último nome>>@facens.br
// Por exemplo: A variável nome possui o conteúdo “Edson Martin Feitosa”. Deve mostrar edson.feitosa@facens.br

let nome = "Victor Alexandre Guimaraes Muller";

/*
console.log(nomeLowerCase);

console.log(nome.split(" ")[0]);
console.log(nome.split(" ").length);

console.log(nome.split(" ")[nome.split(" ").length - 1]);
*/
console.log(
  nome.split(" ")[0].toLowerCase() +
    "." +
    nome.split(" ")[nome.split(" ").length - 1].toLowerCase() +
    "@facens.com"
);
