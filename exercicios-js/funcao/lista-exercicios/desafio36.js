/*
    36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.
*/

vetor = [1, 2, 3, 4, 5];
vetor2 = [5, 6, 3, 2, 1];

function calcularVetor(vetor, multiplicador) {
    let vetorResultado = [];
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador);
    });
    return vetorResultado;
}

function calcularVetorMaiorQueCinco(vetor, multiplicador) {
    let vetorResultado = [];

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            vetorResultado.push(vetor[i] * multiplicador);
        }
    }
    return vetorResultado;
}

console.log(calcularVetor(vetor, 2));
console.log(calcularVetorMaiorQueCinco(vetor2, 2));