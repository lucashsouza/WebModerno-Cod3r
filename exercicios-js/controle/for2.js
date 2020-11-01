const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {
    console.log(`${Number(i)+1}° Nota =  ${notas[i]}`);
}

const pessoa = {
    nome: "Lucas",
    sobrenome: "Souza",
    idade: 20,
    peso: 70
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}