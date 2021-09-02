console.log(typeof Array, typeof new Array, typeof []); // function object object

let aprovados = new Array('Bia', 'Calors', 'Ana');
console.log(aprovados); // [ 'Bia', 'Calors', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']; 
console.log(aprovados[0]); // Bia
console.log(aprovados[1]); // Carlos
console.log(aprovados[2]); // Ana
console.log(aprovados[3]); // undefined

aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados.length); // 5

aprovados[9] = 'Rafael';
console.log(aprovados.length); // 10
console.log(aprovados[8] === undefined) // true

console.log(aprovados); // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]
aprovados.sort(); // altera o array original
console.log(aprovados); // [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

delete aprovados[1];
console.log(aprovados[1]); // undefined
console.log(aprovados[2]); // Bia

aprovados = ['Bia', 'Carlos', 'Ana'];
// aprovados.splice(1, 1); // a partir do indice 1, exclui 1 elemento
// console.log(aprovados) // [ 'Bia', 'Ana' ]

//aprovados.splice(1, 2, 'Elemento1', 'Elemento2'); // a partir do indice 1, exclui 2 elementos e adiciona 2 elementos
//console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2' ]

aprovados.splice(1, 0, 'Elemento1', 'Elemento2'); // no indice 1 adiciona 2 elementos
console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2', 'Carlos', 'Ana' ]
