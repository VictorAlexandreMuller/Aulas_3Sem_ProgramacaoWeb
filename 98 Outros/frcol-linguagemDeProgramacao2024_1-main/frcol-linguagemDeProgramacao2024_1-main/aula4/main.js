// FIND()
let myArray = [10, 20, 18, 3, 55, 33, 11, 40];

let result = myArray.find(value => value > 33);

// let result = myArray.find(myFunction18);

/* function myFunction18(value) {
  return value > 33;
} */

// console.log(result); // 20

let nomes = ["Silvio", "Fabio", "Tito", "Silvio"]; 
// let result2 = nomes.find(nome => nome.includes("a"));

let result2 = nomes.map(acheNomeComA).join(" - ");

function acheNomeComA(nome) {
  return nome + "_final";
}

console.log(result2); // Adam