/*
    28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function analisarVetor(vetorNumeros) {
    let quantidadePares = 0;
    let quantidadeImpares = 0;

    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            quantidadePares++;
        } else {
            quantidadeImpares++;
        }
    }

    console.log(`${quantidadePares} números pares, ${quantidadeImpares} números impares`);
}

vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
analisarVetor(vetor);