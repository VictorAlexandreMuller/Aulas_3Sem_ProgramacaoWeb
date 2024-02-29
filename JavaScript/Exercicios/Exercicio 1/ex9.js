// 9.	Escreva uma função que recebe um endereço de e-mail
// como argumento e retorna true se o e-mail for válido ou false caso contrário.
// Um e-mail válido deve conter um único símbolo '@' e pelo menos um ponto '.' após o '@'.

let emailRecebido = "vi.caco@gmail.com";

if (emailRecebido.indexOf("@") >= 0) {
  emailRecebido.char("@");
  emailRecebido.indexOf(".");
  console.log(emailRecebido.indexOf("@"));
  console.log(emailRecebido.indexOf("."));

  console.log(emailRecebido.split("").reverse().join(""));

  console.log("True");
} else {
  console.log("False");
}

console.log(emailRecebido.indexOf("@"));
