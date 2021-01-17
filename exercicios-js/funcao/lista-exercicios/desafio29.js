/*
    29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.
*/

let vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let vetor2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let vetor3 = [10, 11, 15, 20];

function analisarVetor(vetorNumeros) {
    let quantidadeRange = 0;

    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20) {
            quantidadeRange++;
        }
    }
    console.log(`Foram informados ${quantidadeRange} números dentro do filtro (Entre 10 e 20)`);
}

analisarVetor(vetor);
analisarVetor(vetor2);
analisarVetor(vetor3);