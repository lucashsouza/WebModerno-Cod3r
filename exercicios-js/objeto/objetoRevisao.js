// colecao dinâmica de pares chave/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'Civic',
    valor: 95000,
    proprietario: {
        nome: 'Lucas Souza',
        idade: 21,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Jessica',
        idade: 20
    }, {
        nome: 'José',
        idade: 55
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante';
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);