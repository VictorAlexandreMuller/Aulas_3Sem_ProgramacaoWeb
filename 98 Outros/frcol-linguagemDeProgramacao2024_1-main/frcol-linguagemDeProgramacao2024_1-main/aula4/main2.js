/* 
Classe Animal
propriedades: nome, idade
array de animais
array com animais com idade acima de 5 anos
(.filter)
*/

class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

let animais = [
    new Animal("Toto", 3),
    new Animal("Ozzy", 7),
    new Animal("Juquinha", 2),
    new Animal("Stefanny", 10)
    ];

let animaisVelhos = animais.filter(animal => animal.idade > 5);
console.log(animaisVelhos); 

