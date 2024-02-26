// 5.	Escreva um programa que imprima os números de 1 a 10 no console usando um loop.
// Os número devem ser separados com um traço, ex.: 1 – 2 – 3 - ... – 10.
// Observação: após o número 10 não pode ter um traço.

let valorInicial = 1;
const valorAdicionado = 1;
const listaDeNumeros = [];

soma = 0;

console.log("Valor Inicial: " + valorInicial);

while (soma < 10) {
  soma = valorInicial + valorAdicionado;
  listaDeNumeros.push(valorInicial);
  valorInicial = soma;
  console.log(soma);
}

console.log(listaDeNumeros);
