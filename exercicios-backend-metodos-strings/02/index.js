//Sistema para formatar números de CPF e CNPJ

const cpf = "12345678900";
const cnpj = "12345678000199";

function formatarCpfCnpj(valor) {
    if (valor.length === 11) {
        return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (valor.length === 14) {
        return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    } else {
        return "CPF ou CNPJ inválido";
    }
}

console.log(formatarCpfCnpj(cpf));
console.log(formatarCpfCnpj(cnpj));