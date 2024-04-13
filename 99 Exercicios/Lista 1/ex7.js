// 7.	Escreva uma função que receba uma string como argumento e retorne a string invertida.

function stringInvertida(stringRecebida) {
  return stringRecebida.split("").reverse().join("");
}

console.log(stringInvertida("tamandua bandeira"));
