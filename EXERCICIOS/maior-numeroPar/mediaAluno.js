
const {gets, print} = require('./mediaAluno');

const n = gets();

for(let i = 0; i < n; i++){
    if (n < 5) {
        print("reprovado");
    } else if (n >= 5 && n < 7) {
        print('recuperação');
    } else {
        print("aprovado");
    };
}