
const {gets, print} = require('./funções-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
   const numeroSortedo = gets();
   numerosSorteados.push(numeroSortedo);

    
}
let maiorValor = 0;
for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSortedo = numerosSorteados[i];
    if(numeroSortedo > maiorValor){
        maiorValor = numeroSortedo;
    }
    
}
print(maiorValor);
