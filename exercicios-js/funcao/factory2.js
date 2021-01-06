// Factory simples
function criarProduto(nomeProduto, preco) {
    return {
        nomeProduto: nomeProduto,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Produto 1', 10.99));
console.log(criarProduto('Produto 2', 15.89));