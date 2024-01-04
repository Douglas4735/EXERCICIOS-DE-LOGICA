const precoDoCombustivel = 6.25;
const kmPorLitros = 36;
const distanciaViagem = 1200;

const litrosConsumidos = distanciaViagem / kmPorLitros;
const valorGasto = litrosConsumidos * precoDoCombustivel;
console.log(valorGasto.toFixed(2));

// const numero = 5;

//     if (numero % 2 === 0) {
//         console.log('Número par');
//     } else {
//         console.log('Número ímpar');
//     }



