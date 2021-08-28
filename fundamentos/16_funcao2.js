// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // 5

// Armazenando um funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3)); // 5

// retorno implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3)); // -1

const imprimir2 = a => console.log(a);
imprimir2('Legal!!!');