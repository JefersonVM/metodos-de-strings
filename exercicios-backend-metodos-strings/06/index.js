//Formatar número de celular
//Exemplo (71) 9 9991-8888

const celular = 11982451363;

const formatarCelular = (celular) => {
    celular = celular.toString();
    const ddd = celular.slice(0, 2);
    const parte1 = celular.slice(2, 7);
    const parte2 = celular.slice(7, 11);
    return `(${ddd}) ${parte1}-${parte2}`;
}

console.log(formatarCelular(celular));

