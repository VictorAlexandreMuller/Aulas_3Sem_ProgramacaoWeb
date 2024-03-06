/*
3.	Elabore duas funções que recebem três parâmetros:
  capital inicial,
  taxa de juros
  e tempo de aplicação.

A primeira função retornará o montante da aplicação financeira sob o regime de juros simples 
e a segunda retornará o valor da aplicação sob o regime de juros compostos.
*/

// ------------- CONSIDERANDO: [Juros em %] e [Tempo em Meses] ------------------------------

let jurosSimples = (capInicial, Juros, Tempo) => {
  let formulaJurosSimples = capInicial * (Juros / 100) * Tempo;
  return (
    "O montante inicial foi de: " +
    capInicial +
    "\n" +
    "Sob um Juros de " +
    Juros +
    "% em " +
    Tempo +
    " meses." +
    "\n" +
    "Dessa forma, o montante de Juros Simples foi de: " +
    formulaJurosSimples +
    "\n" +
    "Totalizando um montante final no valor de: " +
    (capInicial + formulaJurosSimples)
  );
};

// console.log(jurosSimples(1000, 5, 10));

// ------------- CONSIDERANDO: [Juros em %] e [Tempo em Meses] ------------------------------

let jurosCompostos = (capInicial, Juros, Tempo) => {
  let formulaJurosCompostos = capInicial * (1 + Juros / 100) ** Tempo;
  return (
    "O montante inicial foi de: " +
    capInicial +
    "\n" +
    "Sob um Juros de " +
    Juros +
    "% em " +
    Tempo +
    " meses." +
    "\n" +
    "Dessa forma, o montante de Juros Compostos foi de: " +
    formulaJurosCompostos +
    "\n" +
    "Totalizando um montante final no valor de: " +
    (capInicial + formulaJurosCompostos)
  );
};

// console.log(jurosCompostos(1000, 5, 10));

// --------------------

console.log(jurosSimples(1000, 5, 10));
console.log("-----------------------------------------");
console.log(jurosCompostos(1000, 5, 10));
