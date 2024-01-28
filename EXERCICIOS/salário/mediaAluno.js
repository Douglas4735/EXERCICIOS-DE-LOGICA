
const {gets, print} = require('./main');

const valorSalario = gets();
const valorAdicionalDosBeneficios = gets();

function calcularPorcentagem(valor,percentual){
    return valor * (percentual / 100);
}
print(calcularPorcentagem(valorSalario, 10));

function pegarAliquota(salario){
    
    if(salario >= 0 && salario <= 2500){
        return 10;
    }else{
        return 15;
    }
}
const aliquotaImposto =  pegarAliquota(valorSalario);

const valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto);

const valorAtransferir = valorSalario - valorImposto + valorAdicionalDosBeneficios;

 print(valorAtransferir);