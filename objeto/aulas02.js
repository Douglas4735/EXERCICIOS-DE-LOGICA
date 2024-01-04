const pessoa = {
    nome: 'douglas silva',
    idade: 32,

    descrever: function () {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};
pessoa.descrever = function(){
    console.log(`meu nome é ${this.nome}`);
}
pessoa.nome = 'fernanda';
pessoa.idade = 25;

pessoa.descrever();

