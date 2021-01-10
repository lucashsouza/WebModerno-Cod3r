/* 
    12) Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(numero) {
    let resultado = 1;

    for (contador = 1; contador <= numero; contador++)
        resultado *= contador;

    return `${numero}! = ${resultado}`;
}

console.log(fatorial(3));