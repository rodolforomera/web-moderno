let dobro = function (a) {
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; // return implicito
console.log(dobro(Math.PI)); // 6.283185307179586

let ola = function () {
    return 'Olá';
}

ola = () => 'Olá';
ola = _ => 'Olá'; // possui um param
console.log(ola()); // Olá