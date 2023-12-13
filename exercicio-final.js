// Transformar "jeferson vieira moreira" em "Jeferson Vieira Moreira

const nome = "jeferson vieira moreira";
const nomeCorrigido = nome
  .split(" ")
  .map((item) => item[0].toUpperCase() + item.slice(1))
  .join(" ");

console.log(nomeCorrigido);
