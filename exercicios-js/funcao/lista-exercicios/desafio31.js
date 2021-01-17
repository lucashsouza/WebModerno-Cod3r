/*
    31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.
*/

function verificaNegativos(vetor) {
    let quantidadeNegativos = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            quantidadeNegativos++;
        }
    }
    return `Quantidade de números negativos: ${quantidadeNegativos}`;
}

vetor = [0, 1, 2, 3, 4, 5]
vetorComNegativos = [-1, -2, -3, 0, 1, 2];
console.log(verificaNegativos(vetor));
console.log(verificaNegativos(vetorComNegativos));