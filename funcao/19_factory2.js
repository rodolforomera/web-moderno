function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 10
    }
}

console.log(criarProduto('Teste', 10)); // { nome: 'Teste', preco: 10, desconto: 10 }
console.log(criarProduto('iPad', 1199.49));