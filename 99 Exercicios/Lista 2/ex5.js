/*
5.	Escreva uma função que recebe um vetor de números 
inteiros e mostre como resultado qual é o menor e qual é o maior número.
*/

let maiorMenorNumero = (numeros) => {
  let listaOrdenada = numeros.sort(function (a, b) {
    return a - b;
  });

  return (
    "O menor número é: " +
    listaOrdenada[0] +
    "\n" +
    "O maior número é: " +
    listaOrdenada.reverse()[0]
  );
};

console.log(maiorMenorNumero([1, 2, 3, 4, 9, 6, 0, 8]));
