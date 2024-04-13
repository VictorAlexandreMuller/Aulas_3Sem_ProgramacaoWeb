// 10.	Escreva uma função que verifique se uma determinada string
// é um palíndromo (ou seja, pode ser lida da mesma forma tanto da
// esquerda para a direita quanto da direita para a esquerda). Exemplo: arara

function palindromo(stringRecebida) {
  let inverterString = stringRecebida.split("").reverse().join("");
  if (stringRecebida == inverterString) {
    console.log("String Recebida: " + stringRecebida);
    console.log("String Invertida: " + inverterString);
    console.log("Esta String é um palíndromo.");
  } else {
    console.log("String Recebida: " + stringRecebida);
    console.log("String Invertida: " + inverterString);
    console.log("Esta String não é um palíndromo.");
  }
}
palindromo("osso");
