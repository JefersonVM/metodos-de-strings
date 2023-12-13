//Validação de arquivos

//Crie uma função que receba o nome do arquivo com sua extensão e faça a validação dos arquivos permitidos conforme a lista abaixo.

// São permitidos arquivos: jpg, jpeg, gif e png;

const nomeArquivo = "Foto da Familia.png";

const validarArquivo = (nomeArquivo) => {
    if (nomeArquivo.endsWith(".jpg") || nomeArquivo.endsWith(".jpeg") || nomeArquivo.endsWith(".gif") || nomeArquivo.endsWith(".png")) {
        return `Arquivo válido`;
    } else {
        return `Arquivo inválido`;
    }
}

console.log(validarArquivo(nomeArquivo));

