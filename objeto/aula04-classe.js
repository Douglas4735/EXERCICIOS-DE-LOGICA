class carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;

    }
    calcularGastoDePercurso(distanciaEmkm, precoCombustivel){
        return distanciaEmkm * this.gastoMedioPorKm * precoCombustivel;
    }
}
const camaro = new carro('Ford','vermelho',1/12);
console.log(camaro.calcularGastoDePercurso(70,5));
const palio = new carro('fiat','preto',1/10);
console.log(palio.calcularGastoDePercurso(70,5));