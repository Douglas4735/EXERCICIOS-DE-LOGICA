 const altura = 1.70;
 const peso = 58;

 const imc = peso / Math.pow(altura, 2);

 if(imc < 18.5){
    console.log('voce esta abaixo do peso');
 }else if(imc >= 18.5 && imc < 25){
    console.log('peso normal');
 }else if(imc >= 25 && imc < 30 ){
    console.log('Acima do peso');
 }else if(imc >= 30 && imc < 40){
    console.log('Obeso');
 }else{
    console.log('Obsidade grave');
 }
 console.log(imc.toFixed(8));