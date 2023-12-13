//Remover pontuação de um CPF

const cpf = "011.022.033-44";

const removerPontuacao = (cpf) => {
    return cpf.replace(/\D/g, "");
}

console.log(removerPontuacao(cpf));