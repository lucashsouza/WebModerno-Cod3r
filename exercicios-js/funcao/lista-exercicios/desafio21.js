/* 
    21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
        considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
            1) crianças com menos de 10 anos pagam R$80,
            2) conveniados com idade entre 10 e 30 anos pagam R$50,
            3) conveniados comidade acima de  30 e até 60 anos pagam R$ 95,
            4) conveniados acima de 60 anos pagam R$130
*/

function calcularPlanoSaude(idade) {
    const valorFixo = 100;
    if (idade < 10) {
        valorTotal = valorFixo + 80;
    } else if (idade > 10 && idade <= 30) {
        valorTotal = valorFixo + 50;
    } else if (idade > 30 && idade <= 60) {
        valorTotal = valorFixo + 95;
    } else {
        valorTotal = valorFixo + 130;
    }

    return formatarDinheiro(valorTotal);
}

function formatarDinheiro(valor) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

console.log(calcularPlanoSaude(8));
console.log(calcularPlanoSaude(25));
console.log(calcularPlanoSaude(30));
console.log(calcularPlanoSaude(31));
console.log(calcularPlanoSaude(60));
console.log(calcularPlanoSaude(61));
console.log(calcularPlanoSaude(65));
console.log(calcularPlanoSaude(70));