/*
    32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function calcularMedia(vetor) {
    soma = 0;
    qntElementos = 0;

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
        qntElementos++;
    }
    return `Média aritimetica =  ${soma / qntElementos}`;
}


vetor = [1, 2, 3, 4, 5];
console.log(calcularMedia(vetor));