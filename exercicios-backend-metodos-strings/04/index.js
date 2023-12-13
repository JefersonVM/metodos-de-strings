//Sistema de formatação de dados do formulário

let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

// Formatar o identificador para que ele tenha sempre 6 caracteres, adicionando zeros à esquerda se necessário
identificador = identificador.padStart(6, "0");

// Formatar o nome com letras maiúsculas no início de cada palavra
nome = nome
  .toLowerCase()
  .split(" ")
  .map((palavra) => palavra[0].toUpperCase() + palavra.slice(1))
  .join(" ");

// Formatar o email removendo espaços em branco do início e do fim
email = email.trim();

console.log(identificador);
console.log(nome);
console.log(email);
