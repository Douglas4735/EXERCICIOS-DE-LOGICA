
const {gets, print} = require('./main');

const valorSalarioBruto = gets();
const valorAdicionalDosBeneficios = gets();

function calcularPorcentagem(valor,percentual){
    return valor * (percentual / 100);
}
print(calcularPorcentagem(valorSalarioBruto, 10));