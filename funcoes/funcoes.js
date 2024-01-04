function incrementarJuros(valor, percentual){
    const valorDoAcrecimo = (percentual / 100) * valor;
    return valor + valorDoAcrecimo;
}
console.log(incrementarJuros(100,10));

//---------------------------------------------
function adicionarJuros(valor1, percentual2){
    const valorAcrecimo = (percentual2 / 200) * valor1;
    return valor1 + valorAcrecimo;
}
console.log(adicionarJuros(200,20));