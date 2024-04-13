// Array
// SE ABRIR E FECHAR CONCHETES, ELE IDENTIFICA COMO ARRAY
const lista = [1, 2.2, 3, 4, 5, 6.7, 7];
//Ordem dos números  0, 1,   2, 3, 4, 5,   6

// Mostrar os dados
console.log(lista[2]);
lista[2] = "edson";

console.log(lista.length);
lista[7] = "novo";
console.log(lista);

lista[12] = 123;
console.log(lista);

// Adicionar ou excluir valores no começo
lista.unshift(456.6);
console.log(lista);

lista.shift();
console.log(lista);

// Adicionar ou excluir valores no final da lista
lista.push("mais um");
console.log(lista);
lista.pop();
console.log(lista);
