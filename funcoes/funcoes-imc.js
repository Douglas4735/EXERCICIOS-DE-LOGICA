function calculaImc(peso,altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    
    if(imc < 18.5){
       return 'voce esta abaixo do peso';
    }else if(imc >= 18.5 && imc < 25){
       return 'peso normal';
    }else if(imc >= 25 && imc < 30 ){
       return 'Acima do peso';
    }else if(imc >= 30 && imc < 40){
       return 'Obeso';
    }else{
       console.log('Obsidade grave');
    }
}

function main(){
    
    const altura = 1.70;
    
    const peso = 58;
    
    const imc = calculaImc(peso,altura);
    
    console.log(classificarImc(imc.toFixed(8)));
}
main();
