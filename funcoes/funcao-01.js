



function meuNome(nome){
    console.log('meu nome é ' + nome);

}

function verificarIdade(idade){
    if(idade >= 18){
        console.log('voce e maior de idade');
    }else{
        console.log('voce e menor de idade');
    }
}

function main(){
    meuNome("douglas");
    verificarIdade(12);
}

main();