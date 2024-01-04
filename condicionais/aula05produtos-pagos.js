
const precoEtiqueta = 100;
const pagamento = 4;

if(pagamento === 1){
    console.log( precoEtiqueta -( precoEtiqueta * 0.1));
}else if(pagamento === 2){
    console.log(precoEtiqueta -( precoEtiqueta * 0.15));
}else if(pagamento === 3){
    console.log(precoEtiqueta);
}else{
    console.log(precoEtiqueta + ( precoEtiqueta * 0.1));
}
