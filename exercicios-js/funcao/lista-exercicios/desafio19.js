/* 
    19)  O cardápio de uma lanchonete é o seguinte:

    Código  |   Descrição do Produto    |   Preço
    100     |   Cachorro Quente         | R$ 3,00
    200     |   Hambúrguer Simples      | R$ 4,00
    300     |   Cheeseburguer           | R$ 5,50
    400     |   Bauru                   | R$ 7,50
    500     |   Refrigerante            | R$ 3,50
    600     |   Suco                    | R$ 2,80

    Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.
*/

function calcularPedido(codigoItem, quantidade) {

    switch (codigoItem) {
        case 100:
            valor = (3.00 * quantidade).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            return `Total = ${valor}`;
            break;
        case 200:
            valor = (4.00 * quantidade).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            return `Total = ${valor}`;
            break;
        case 300:
            valor = (5.50 * quantidade).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            return `Total = ${valor}`;
            break;
        case 400:
            valor = (7.50 * quantidade).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            return `Total = ${valor}`;
            break;
        case 500:
            valor = (3.50 * quantidade).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            return `Total = ${valor}`;
            break;
        case 600:
            valor = (2.80 * quantidade).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            return `Total = ${valor}`;
            break;

        default:
            return "Produto não cadastrado!";
            break;
    }
}

console.log(calcularPedido(100, 2));
console.log(calcularPedido(200, 2));
console.log(calcularPedido(300, 2));
console.log(calcularPedido(400, 2));
console.log(calcularPedido(500, 2));
console.log(calcularPedido(600, 2));