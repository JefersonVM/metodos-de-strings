const imprimirData = (dia, mes, ano) => {

    console.log(`${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${ano}`);
}

imprimirData(1, 1, 2021);