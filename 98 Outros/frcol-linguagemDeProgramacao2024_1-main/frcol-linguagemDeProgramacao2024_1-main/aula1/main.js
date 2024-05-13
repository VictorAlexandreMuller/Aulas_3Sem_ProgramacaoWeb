// comentarios de una sola linea
// CTRL+/

/* 
ALT+SHIFT+A
comentarios de varias lineas
 */

// declarando variaveis
/* const pi = 3.14;    // constante

let nome = "Fabio";
let idade = 40;
let eValido = true;
let preco = 12.554578458768;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof eValido);
console.log(typeof preco);

let sobrenome;

console.log(typeof sobrenome);
console.log(3/0);

let x = null;
console.log(x);

console.log(Number.isInteger(idade));

console.log(preco.toFixed(2)); */

/* const nome = "Fábio";
console.log(nome);

console.log(nome.charAt(3));
console.log(nome.charCodeAt(3));
console.log(nome.replace("bi", "XX"));
console.log(nome.length);
console.log(nome.endsWith("n"));
console.log(nome.indexOf("b"));
console.log(nome.substring(0, 3));
console.log(nome.toLocaleUpperCase());
console.log("Ana,Maria,José".split(","));
console.log(nome.concat(" Rodrigo ".concat('Colombini')));
console.log(nome.includes("i")); */

// CONCATENACAO
/* console.log(nome.concat(" Rodrigo ".concat('Colombini')));
let nome = "Fábio";
let sobrenome = "Colombini";
console.log(nome + " " + sobrenome); // concatenação

console.log(`o meu nome e ${nome} 
        ${sobrenome}`); // interpolação */

/* let eValido = true;
let ePessoaFisica = false;

let eMasculino = !!1;

console.log(eMasculino);
 */


function mostrarNome() {
    console.log("Fábio");
}   

mostrarNome();

function mostrarNome2(_nome) {
    console.log(_nome);
}

mostrarNome2("Colombini");

function soma(a, b=1) {
    return a + b;
}

console.log(soma(2,3));

