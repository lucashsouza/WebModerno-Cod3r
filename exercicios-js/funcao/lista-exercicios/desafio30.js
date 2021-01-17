/*
    30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function VerificaMaiorMenor(vetorNumeros) {
    let maior;
    let menor;

    for (let i = 0; i < vetorNumeros.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetorNumeros[i];
            menor = vetorNumeros[i];
        } else {
            if (vetorNumeros[i] > maior) {
                maior = vetorNumeros[i];
            }
            if (vetorNumeros[i] < menor) {
                menor = vetorNumeros[i];
            }
        }
    }
    return [maior, menor];
}

vetor = [0, 1, 2, 3, 4, 5];
vetor2 = [5, 4, 3, 2, 1];
console.log(VerificaMaiorMenor(vetor));