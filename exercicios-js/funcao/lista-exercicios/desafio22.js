/* 
    22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
    parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. 
    
    A anuidade deve ser paga no mês de janeiro. 
    Por mês, é cobrado 5% de juros (sob o regime de juroscompostos). 
    O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function calcularValor(mes, valor) {
    if (mes >= 1 && mes <= 12) {
        atraso = mes - 1;
        valorTotal = (valor * ((1 + (5 / 100)) ** atraso)).toFixed(2);
        return formatarDinheiro(valorTotal);
    } else {
        return "Mês invalido";
    }
}

function formatarDinheiro(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

console.log(calcularValor(4, 100));