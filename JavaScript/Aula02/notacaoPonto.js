// Notação Ponto
// SE COMEÇAR COM CHAVES, ELE IDENTIFICA COMO OBJETO
const pessoa = {
  nome: "Edson",
  email: "edson@gmail.com",
  endereco: {
    rua: "Rua Florida",
    numero: 10,
    bairro: "Das Flores",
  },
  notas: [10, 9, 8],
};
console.log(pessoa);

// Como alterar conteúdos/criar conteúdos dentro da Array
pessoa.nome = "Edsonnnnn";
console.log(pessoa);

// Como pesquisar na Array
console.log(pessoa.nome);
console.log(pessoa.email);
console.log(pessoa.endereco.numero);
console.log(pessoa.notas[1]);
