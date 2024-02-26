// Tipos de Função

// Função Nomeada
function Subtracao(num1, num2) {
  return num1 - num2;
}
console.log(Subtracao(4, 2));

//Função Anônima
let divisao = function (num1, num2) {
  if (num2 == 0) {
    return "Impossível dividir por zero.";
  } else {
    return num1 / num2;
  }
};
console.log(divisao(5, 0));
console.log(divisao(5, 2.5));

// Arrow Function com {}
let multiplicacao = (num1, num2) => {
  return num1 * num2;
};
console.log(multiplicacao(3, 4));

// Arrow Function de uma linha só identifica como "return" tudo que vem após a arrow
let operacaoMatematica = (num1, num2, operacao) => operacao(num1, num2);
console.log(operacaoMatematica(3, 4, divisao));

// Classe
// Classe é função, então posso instanciar o objeto de uma função

let x = new multiplicacao(2, 3);
