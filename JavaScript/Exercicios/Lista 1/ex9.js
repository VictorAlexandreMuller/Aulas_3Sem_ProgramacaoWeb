// 9.	Escreva uma função que recebe um endereço de e-mail
// como argumento e retorna true se o e-mail for válido ou false caso contrário.
// Um e-mail válido deve conter um único símbolo '@' e pelo menos um ponto '.' após o '@'.

function checagemEmail(emailRecebido) {
  let primeiraValidacao = emailRecebido.match(/@/g);

  if (primeiraValidacao == null) {
    return false;
  }

  if (primeiraValidacao.length != 1) {
    return false;
  }

  let separacao = emailRecebido.split("@");
  let segundaValidacao = separacao[1].match(/\./g);

  if (segundaValidacao == null) {
    return false;
  }
  if (segundaValidacao.length <= 0) {
    return false;
  }
  return true;
}

console.log(checagemEmail("vi.caco@gmail.com"));
