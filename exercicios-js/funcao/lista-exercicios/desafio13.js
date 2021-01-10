/* 
    13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function verificarDiaSemana(diaSemana) {

    switch (diaSemana) {
        case 1:
            return `${diaSemana = "Domingo"} é Fim de semana`;
            break;
        case 2:
            return `${diaSemana = "Segunda"} é dia útil`;
            break;
        case 3:
            return `${diaSemana = "Terça"} é dia útil`;
            break;
        case 4:
            return `${diaSemana = "Quarta"} é dia útil`;
            break;
        case 5:
            return `${diaSemana = "Quinta"} é dia útil`;
            break;
        case 6:
            return `${diaSemana = "Sexta"} é dia útil`;
            break;
        case 7:
            return `${diaSemana = "Sábado"} é Fim de semana`;
            break;
        default:
            return "Valor informado inválido, favor verificar!";
            break;
    }
}

console.log(verificarDiaSemana(1));
console.log(verificarDiaSemana(2));
console.log(verificarDiaSemana(3));
console.log(verificarDiaSemana(4));
console.log(verificarDiaSemana(5));
console.log(verificarDiaSemana(6));
console.log(verificarDiaSemana(7));
console.log(verificarDiaSemana(0));