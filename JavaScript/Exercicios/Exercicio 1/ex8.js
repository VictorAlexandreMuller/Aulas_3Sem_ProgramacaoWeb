// 8.	Escreva uma função que recebe uma string como argumento e retorna o
// número de vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u).

function funcaoVogais(stringRecebida) {
  const vogais = ["a", "e", "i", "o", "u"];

  let contador = 0;

  for (i = 0; i < stringRecebida.length; i++) {
    if (vogais.includes(stringRecebida[i])) {
      contador += 1;
    }
  }
  return contador;
}
console.log(funcaoVogais("aaAaaeu"));
