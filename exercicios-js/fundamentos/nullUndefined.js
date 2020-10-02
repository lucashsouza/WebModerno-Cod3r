let valor;  // Nao inicializado
console.log(valor);

valor = null;   // Ausencia de valor
console.log(valor);
// console.log(valor.toString());  // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = null; // Sem preço
console.log(!!produto.preco);
console.log(produto);