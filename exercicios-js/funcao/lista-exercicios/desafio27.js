/*
    27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function calcularCrescimento(altura1, taxaCrescimento1, altura2, taxaCrescimento2) {
    if (altura1 == altura2) {
        if (taxaCrescimento1 > taxaCrescimento2) {
            return "A primeira criança ultrapassará a segunda criança em um ano!";
        } else if (taxaCrescimento2 > taxaCrescimento1) {
            return "A segunda criança ultrapassará a primeira criança em um ano!";
        } else {
            return "As duas crianças possuem altura e taxa de crescimento iguais!";
        }
    } else {
        if (altura1 > altura2) {
            if (taxaCrescimento1 >= taxaCrescimento2) {
                return "A criança menor não ultrapassará a criança maior";
            } else {
                return calcularTempo(altura2, taxaCrescimento2, altura1, taxaCrescimento1);
            }
        } else {
            if (taxaCrescimento2 >= taxaCrescimento1) {
                return "A criança menor não ultrapassará a criança maior";
            } else {
                return calcularTempo(altura1, taxaCrescimento1, altura2, taxaCrescimento2);
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaCrescimentoMenor, alturaMaior, taxaCrescimentoMaior) {
    let quantidadeAnos = 0;
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaCrescimentoMenor;
        alturaMaior += taxaCrescimentoMaior;
        quantidadeAnos++;
    }
    return `A criança menor ultrapassará a maior em ${quantidadeAnos} anos`;
}

console.log(calcularCrescimento(150, 2, 150, 2));
console.log(calcularCrescimento(150, 3, 150, 2));
console.log(calcularCrescimento(150, 2, 150, 3));
console.log(calcularCrescimento(130, 2, 120, 4));
console.log(calcularCrescimento(150, 2, 130, 4));