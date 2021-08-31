function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0;

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        }else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro; // () opcional
uno.acelerar();
console.log(uno.getVelocidadeAtual()); // 5

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual()); // 60

console.log(typeof Carro); // function
console.log(typeof ferrari); // object