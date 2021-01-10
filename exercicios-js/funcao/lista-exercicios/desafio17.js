/* 
    17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:

    Plano |  Aumento
    A     |     10%
    B     |     15%
    C     |     20%

    Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumentoSalarial(plano, salarioAtual) {

    plano = plano.toUpperCase().trim();

    switch (plano) {
        case "A":
            return salarioAtual *= 1.1;
            break;
        case "B":
            return salarioAtual *= 1.15;
            break;
        case "C":
            return salarioAtual *= 1.2;
            break;
        default:
            return "Plano inválido!";
            break;
    }
}

console.log(aumentoSalarial("A", 1000));
console.log(aumentoSalarial("B", 1000));
console.log(aumentoSalarial("c", 1000));
console.log(aumentoSalarial("D", 1000));