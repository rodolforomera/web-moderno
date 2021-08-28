let valor; // não inicializada
console.log(valor); // undefined

valor = null;  // ausência de valor
console.log(valor); // null
// console.log(valor.toString()); // Erro!

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco); // false
// delete produto.preco // remove atributo do objeto
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);