/*
1.	Os triângulos podem ser classificados em 3 tipos quanto ao 
tamanho de seus lados:
  Equilátero: Os três lados são iguais.
  Isósceles: Dois lados iguais.
  Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e 
retorne sua classificação quanto ao tamanho de seus lados.
*/

let triangulo = (x, y, z) => {
  if ((x == y) & (x == z)) {
    return "triangulo equilatero";
  }
  if ((x == y) & (x != z) || (x == z) & (x != y)) {
    return "triangulo isosceles";
  }
  if ((x != y) & (x != z) & (y != z)) {
    return "triangulo escaleno";
  }
};
console.log(triangulo(1, 3, 2));
