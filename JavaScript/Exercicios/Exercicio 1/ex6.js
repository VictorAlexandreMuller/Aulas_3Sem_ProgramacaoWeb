// 6.	Faça uma função que mostre o dobro do número passado.
// Caso o número seja menor ou igual a zero deve mostrar
// a mensagem “Só é aceito números positivos maiores que zero”.

function dobroDoNumero(numero) {
  if (numero > 0) {
    console.log(numero * 2);
  } else {
    console.log("Só é aceito números positivos maiores que zero.");
  }
}
dobroDoNumero(8);

// ---------------------------------------------------------------------------

/*
let dobro = function (num) {
  return num * 2;
};

let num = 15;

for (let i = 0; i < 10; i++) {
  if (num > 0) {
    const exibir = dobro(num);
    console.log(exibir);
    num = exibir;
  } else {
    console.log("Só é aceito números positivos maiores que zero.");
  }
}
*/
