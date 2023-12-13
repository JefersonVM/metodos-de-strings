const numeroCartao = "1111222233334444";

const numeroCartaoEscondido = `${numeroCartao.slice(0, 4)}${"*".repeat(
  8
)}${numeroCartao.slice(-4)}`;

console.log(numeroCartaoEscondido);
