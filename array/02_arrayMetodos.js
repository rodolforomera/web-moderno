const pilotos = ['Vettel', 'Alonso', 'Raikonen', 'Massa'];
pilotos.pop(); // massa quebrou o carro! remove o ultimo elemento
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikonen' ]

pilotos.push('Verstappen');
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikonen', 'Verstappen' ]

pilotos.shift(); // remove o primeiro!
console.log(pilotos);  // [ 'Alonso', 'Raikonen', 'Verstappen' ]

pilotos.unshift('Hamilton'); // adiciona no primeiro
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Raikonen', 'Verstappen' ]

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikonen', 'Verstappen' ]

// remover
pilotos.splice(3, 1); // massa quebrou :( haha
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikonen', 'Verstappen' ]

const algunsPilotos1 = pilotos.slice(2) // novo array apartir do indice 2
console.log(algunsPilotos1); // [ 'Bottas', 'Raikonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4); //Não inclui o indice 4
console.log(algunsPilotos2); // [ 'Alonso', 'Bottas', 'Raikonen' ]