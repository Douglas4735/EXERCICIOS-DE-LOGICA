function aplicarDesconto(valor,desconto){
    return (valor - (valor *(desconto / 100)));
}
function aplicarJuros(valor,juros){
    return (valor + (valor *(juros / 100)));
}

const valorEtiqueta = 100;
const formaDePagamento = 2 ;

if(formaDePagamento === 1){
    console.log(aplicarDesconto(valorEtiqueta,10));
}else if(formaDePagamento === 2){
    console.log(aplicarDesconto(valorEtiqueta,15));    
}else if(formaDePagamento === 3){
    console.log(valorEtiqueta);
}else{
    console.log(aplicarDesconto(valorEtiqueta,10));
}
console.log(200 * 0.10);
console.log(10 / 100);

