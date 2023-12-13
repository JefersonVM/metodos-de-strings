// Gerador de Nickname

// O nickname deve conter, no máximo, 13 caracteres;
// Deve começar sempre com "@";
// Não deve existir espaços em branco;
// São permitidos apenas caracteres minúsculos.




const nome = 'Guido Cerqueira';

const gerarNickname = (nome) => {
    nome = nome.toLowerCase();
    nome = nome.trim();
    nome = nome.slice(0, 13);
    nome = nome.replace(/\s/g, '');
    return `@${nome}`;
}

console.log(gerarNickname(nome));