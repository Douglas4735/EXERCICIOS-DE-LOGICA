const nota1 = 7;
const nota2 = 8;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log( 'Aluno reprovado media: ');
}else if(media >= 5 &&  media <= 7){
    console.log('aluno de recuperação media: ');
}else{
    console.log('Aluno Aprovado media: ');
}
console.log(media.toFixed(0));