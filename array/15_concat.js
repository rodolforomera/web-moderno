const filhas = ['Ualeskah', 'Cibalena'];
const filhos = ['Uoxinton', 'Uesclei'];
const todos = filhas.concat(filhos);
console.log(todos, filhas, filhos); // [ 'Ualeskah', 'Cibalena', 'Uoxinton', 'Uesclei' ] [ 'Ualeskah', 'Cibalena' ] [ 'Uoxinton', 'Uesclei' ]

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
