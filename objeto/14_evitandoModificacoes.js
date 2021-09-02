// Object.preventExtensions (Não consegue adicionar, mas pode excluir e modificar valores dos atributos)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
});
console.log('Extensivel:', Object.isExtensible(produto)); // Extensivel: false

produto.nome = 'Borracha'; // OK
produto.descricao = 'Borracha escolar branca'; // Não tem efeito
delete produto.tag; // OK
console.log(produto); // { nome: 'Borracha', preco: 1.99 }

// Object.seal (Não consegue adicionar/excluir atributos, mas consegue modificar valores)
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa)); // Selado: true

pessoa.sobrenome = 'Silva'; // Não tem efeito
delete pessoa.nome; // Não tem efeito
pessoa.idade = 29; // OK
console.log(pessoa); // { nome: 'Juliana', idade: 29 }

// Object.freeze = selado + valores constantes