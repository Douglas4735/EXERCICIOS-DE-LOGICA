class pessoa{
    nome;
    idade;

    descrever(){
        console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const douglas = new pessoa();
douglas.nome = 'douglas silva';
douglas.idade = 32;

const fernanda = new pessoa();
fernanda.nome = 'fernanda adriele';
fernanda.idade = 25;

const ester = new pessoa();
ester.nome = 'ester soares';
ester.idade = 5;


// console.log(douglas);
// console.log(fernanda);
// console.log(ester);

douglas.descrever();
fernanda.descrever();
ester.descrever();