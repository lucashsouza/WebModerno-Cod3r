/* 
    01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/

function operacao(x, y) {
    console.log(`${x} + ${y} = ${x+y}`);
    console.log(`${x} - ${y} = ${x-y}`);
    console.log(`${x} x ${y} = ${x*y}`);
    console.log(`${x} / ${y} = ${x/y}`);
}

operacao(100, 20);