class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }
   descrever(){
    console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
   }
}
function compararPessoas(p1,p2) {
     if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
     }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é maior que ${p1.nome}`);
     }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
     }
}
const douglas = new Pessoa('douglas',32);
const fernanda = new Pessoa('fernanda',25);

compararPessoas(douglas, fernanda);